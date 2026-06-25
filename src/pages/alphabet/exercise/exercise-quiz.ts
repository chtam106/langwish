import {
  getAlphabetItems,
  type AlphabetCell,
  type ExerciseScope
} from '@/constants/alphabet-charts.ts';

export type { ExerciseScope };

export type Script = 'hiragana' | 'katakana';
export type ExerciseScript = Script | 'all';
export type ExerciseMode = 'romaji' | 'character' | 'listen' | 'script-pair';
export type ScriptPairDirection = 'hiragana-to-katakana' | 'katakana-to-hiragana' | 'mixed';
export type ResolvedScriptPairDirection = 'hiragana-to-katakana' | 'katakana-to-hiragana';

/** One syllable with both scripts kept together, so pairing is just a field read. */
export type KanaEntry = {
  romaji: string;
  hiragana: AlphabetCell;
  katakana: AlphabetCell;
};

export type QuizQuestion = {
  mode: ExerciseMode;
  correctItem: AlphabetCell;
  optionItems: AlphabetCell[];
  correctAnswers: string[];
  promptItem?: AlphabetCell;
  pairDirection?: ResolvedScriptPairDirection;
};

export type QuizSession = {
  next: () => QuizQuestion;
  remaining: number;
  total: number;
};

/**
 * Each kana accepts exactly one romaji spelling (the one shown in the chart).
 * Typed input is only trimmed/lowercased before being matched against it - no
 * alternate spellings (Kunrei, homophones) are accepted.
 */
export function normalizeRomajiInput(value: string) {
  return value.trim().toLowerCase();
}

// Hiragana and katakana chart items share the same structure and order, so the
// two flattened arrays line up index-for-index and can be zipped into entries.
function getKanaEntries(scope: ExerciseScope): KanaEntry[] {
  const hiragana = getAlphabetItems('hiragana', scope);
  const katakana = getAlphabetItems('katakana', scope);

  return hiragana.map((cell, index) => ({
    romaji: cell.romaji,
    hiragana: cell,
    katakana: katakana[index]!
  }));
}

function otherScript(script: Script): Script {
  return script === 'hiragana' ? 'katakana' : 'hiragana';
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function pickOptionItems(
  pool: AlphabetCell[],
  correctItem: AlphabetCell,
  pair?: AlphabetCell
): AlphabetCell[] {
  const otherItems = pool.filter((item) => item.romaji !== correctItem.romaji);
  const distractorCount = Math.min(pair ? 2 : 3, otherItems.length);

  return shuffle([
    correctItem,
    ...(pair ? [pair] : []),
    ...shuffle(otherItems).slice(0, distractorCount)
  ]);
}

function resolvePairDirection(direction: ScriptPairDirection): ResolvedScriptPairDirection {
  if (direction === 'mixed') {
    return Math.random() < 0.5 ? 'hiragana-to-katakana' : 'katakana-to-hiragana';
  }

  return direction;
}

function getAnswerScript(pairDirection: ResolvedScriptPairDirection): Script {
  return pairDirection === 'hiragana-to-katakana' ? 'katakana' : 'hiragana';
}

function getPromptScript(pairDirection: ResolvedScriptPairDirection): Script {
  return pairDirection === 'hiragana-to-katakana' ? 'hiragana' : 'katakana';
}

// A single turn: the syllable plus which script's glyph is its subject. In
// "all script" modes both scripts of every entry become their own turn.
type QuizDeckItem = {
  entry: KanaEntry;
  script: Script;
};

function buildDeck(
  entries: KanaEntry[],
  script: ExerciseScript,
  mode: ExerciseMode
): QuizDeckItem[] {
  if (mode === 'script-pair') {
    return entries.map((entry) => ({ entry, script: 'hiragana' }));
  }

  if (script === 'all') {
    return entries.flatMap((entry) => [
      { entry, script: 'hiragana' as Script },
      { entry, script: 'katakana' as Script }
    ]);
  }

  return entries.map((entry) => ({ entry, script }));
}

function buildQuestion(
  deckItem: QuizDeckItem,
  entries: KanaEntry[],
  mode: ExerciseMode,
  script: ExerciseScript
): QuizQuestion {
  const { entry, script: itemScript } = deckItem;
  const correctItem = entry[itemScript];
  const isAllScript = script === 'all';
  const includeScriptPair = isAllScript && (mode === 'character' || mode === 'listen');
  const pair = includeScriptPair ? entry[otherScript(itemScript)] : undefined;

  const pool = isAllScript
    ? entries.flatMap((item) => [item.hiragana, item.katakana])
    : entries.map((item) => item[itemScript]);

  const optionItems = pickOptionItems(pool, correctItem, pair);

  if (mode === 'romaji') {
    return {
      mode,
      correctItem,
      optionItems,
      correctAnswers: [entry.romaji]
    };
  }

  return {
    mode,
    correctItem,
    optionItems,
    correctAnswers: pair ? [correctItem.char, pair.char] : [correctItem.char]
  };
}

function buildScriptPairQuestion(
  entry: KanaEntry,
  entries: KanaEntry[],
  pairDirection: ScriptPairDirection
): QuizQuestion {
  const resolvedDirection = resolvePairDirection(pairDirection);
  const promptScript = getPromptScript(resolvedDirection);
  const answerScript = getAnswerScript(resolvedDirection);
  const promptItem = entry[promptScript];
  const correctItem = entry[answerScript];
  const pool = entries.map((item) => item[answerScript]);

  return {
    mode: 'script-pair',
    promptItem,
    correctItem,
    pairDirection: resolvedDirection,
    optionItems: pickOptionItems(pool, correctItem),
    correctAnswers: [correctItem.char]
  };
}

export function createQuizSession(
  script: ExerciseScript,
  mode: ExerciseMode,
  scope: ExerciseScope = 'all',
  pairDirection: ScriptPairDirection = 'hiragana-to-katakana'
): QuizSession {
  const entries = getKanaEntries(scope);
  const deck = buildDeck(entries, script, mode);
  let remaining = shuffle([...deck]);

  return {
    get remaining() {
      return remaining.length;
    },
    total: deck.length,
    next() {
      if (deck.length === 0) {
        throw new Error(`No alphabet items for scope: ${scope}`);
      }

      if (remaining.length === 0) {
        remaining = shuffle([...deck]);
      }

      const deckItem = remaining.pop()!;

      if (mode === 'script-pair') {
        return buildScriptPairQuestion(deckItem.entry, entries, pairDirection);
      }

      return buildQuestion(deckItem, entries, mode, script);
    }
  };
}

export function isQuizAnswerCorrect(question: QuizQuestion, answer: string) {
  return question.correctAnswers.includes(answer);
}

export function getOptionValue(item: AlphabetCell, mode: ExerciseMode) {
  return mode === 'romaji' ? item.romaji : item.char;
}

export function usesCharacterOptions(mode: ExerciseMode) {
  return mode === 'character' || mode === 'listen' || mode === 'script-pair';
}
