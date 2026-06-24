import type { Lesson } from './types.ts'

export const frontendLessonsC: Lesson[] = [
  {
    id: 'lesson-11',
    number: 11,
    track: 'frontend',
    title: {
      en: 'Testing Strategy and QA Collaboration',
      vi: 'Chiến lược testing và phối hợp QA',
    },
    focus: {
      en: 'Learn practical Japanese for writing test cases, triaging defects, and collaborating with QA engineers.',
      vi: 'Học tiếng Nhật thực tế để viết test case, phân loại lỗi và phối hợp với QA engineer.',
    },
    vocab: [
      {
        kana: 'テストケース',
        romaji: 'tesuto kēsu',
        meaning: { en: 'test case', vi: 'test case' },
      },
      {
        kana: 'テストシナリオ',
        romaji: 'tesuto shinario',
        meaning: { en: 'test scenario', vi: 'kịch bản test' },
      },
      {
        kana: 'しょうがい',
        kanji: '障害',
        romaji: 'shōgai',
        meaning: { en: 'defect/incident', vi: 'sự cố/lỗi' },
      },
      {
        kana: 'ふぐあい',
        kanji: '不具合',
        romaji: 'fuguai',
        meaning: { en: 'bug/malfunction', vi: 'lỗi bất thường' },
      },
      {
        kana: 'ゆうせんど',
        kanji: '優先度',
        romaji: 'yūsendo',
        meaning: { en: 'priority', vi: 'mức ưu tiên' },
      },
      {
        kana: 'さいげんせい',
        kanji: '再現性',
        romaji: 'saigensei',
        meaning: { en: 'reproducibility', vi: 'tính tái hiện' },
      },
      {
        kana: 'しょうさい',
        kanji: '詳細',
        romaji: 'shōsai',
        meaning: { en: 'details', vi: 'chi tiết' },
      },
      {
        kana: 'けんしょう',
        kanji: '検証',
        romaji: 'kenshō',
        meaning: { en: 'verification', vi: 'kiểm chứng' },
      },
    ],
    grammar: [
      {
        pattern: 'V（た形）ところ',
        title: { en: 'After trying, found that', vi: 'Sau khi thử thì phát hiện' },
        explanation: {
          en: 'Use this pattern in defect reports to explain what you observed after executing steps.',
          vi: 'Dùng mẫu này trong bug report để nêu điều quan sát được sau khi thực hiện thao tác.',
        },
        examples: [
          {
            jp: '同じ手順で検証したところ、モバイルだけで不具合が再現しました。',
            romaji:
              'Onaji tejun de kenshō shita tokoro, mobairu dake de fuguai ga saigen shimashita.',
            meaning: {
              en: 'After verifying with the same steps, the bug reproduced only on mobile.',
              vi: 'Sau khi kiểm chứng cùng thao tác, lỗi chỉ tái hiện trên mobile.',
            },
          },
          {
            jp: 'ログを確認したところ、通信エラーが原因だと分かりました。',
            romaji: 'Rogu o kakunin shita tokoro, tsūshin erā ga gen-in da to wakarimashita.',
            meaning: {
              en: 'After checking logs, we found communication error was the cause.',
              vi: 'Sau khi kiểm tra log, chúng tôi phát hiện lỗi giao tiếp là nguyên nhân.',
            },
          },
        ],
      },
      {
        pattern: 'V（ない形）ように',
        title: { en: 'So that it does not happen', vi: 'Để không xảy ra' },
        explanation: {
          en: 'Use this to describe preventive actions and regression prevention plans.',
          vi: 'Dùng mẫu này để diễn đạt hành động phòng ngừa và kế hoạch tránh lỗi lặp lại.',
        },
        examples: [
          {
            jp: '同じ障害が再発しないように、回帰テストを追加しました。',
            romaji: 'Onaji shōgai ga saihatsu shinai yō ni, kaiki tesuto o tsuika shimashita.',
            meaning: {
              en: 'We added regression tests so the same incident does not recur.',
              vi: 'Chúng tôi thêm regression test để sự cố tương tự không tái diễn.',
            },
          },
          {
            jp: '見落としがないように、レビュー項目を明文化します。',
            romaji: 'Miotoshi ga nai yō ni, rebyū kōmoku o meibunka shimasu.',
            meaning: {
              en: 'We document review items to avoid missing anything.',
              vi: 'Chúng tôi văn bản hóa hạng mục review để tránh bỏ sót.',
            },
          },
        ],
      },
    ],
    reading: [
      {
        id: 'reading-1',
        title: { en: 'Bug triage meeting', vi: 'Cuộc họp triage bug' },
        lines: [
          {
            jp: '朝のミーティングで、QAチームから三件の不具合報告がありました。',
            romaji: 'Asa no mītingu de, QA chīmu kara san-ken no fuguai hōkoku ga arimashita.',
            meaning: {
              en: 'In the morning meeting, QA reported three defects.',
              vi: 'Trong buổi họp sáng, team QA báo ba lỗi.',
            },
          },
          {
            jp: '再現性とユーザー影響を確認したところ、一件は最優先だと判断されました。',
            romaji:
              'Saigensei to yūzā eikyō o kakunin shita tokoro, ikken wa sai-yūsen da to handan saremashita.',
            meaning: {
              en: 'After checking reproducibility and user impact, one issue was judged top priority.',
              vi: 'Sau khi kiểm tra tính tái hiện và ảnh hưởng người dùng, một lỗi được xác định là ưu tiên cao nhất.',
            },
          },
          {
            jp: 'チームは本日中に修正して、再発しないようにテストを強化することにしました。',
            romaji:
              'Chīmu wa honjitsu-chū ni shūsei shite, saihatsu shinai yō ni tesuto o kyōka suru koto ni shimashita.',
            meaning: {
              en: 'The team decided to fix it today and strengthen tests to prevent recurrence.',
              vi: 'Team quyết định sửa trong hôm nay và tăng cường test để tránh tái diễn.',
            },
          },
        ],
        questions: [
          {
            id: 'q1',
            question: { en: 'How many defects were reported?', vi: 'Có bao nhiêu lỗi được báo?' },
            choices: [
              { id: 'a', label: { en: 'Three defects', vi: 'Ba lỗi' } },
              { id: 'b', label: { en: 'One defect', vi: 'Một lỗi' } },
              { id: 'c', label: { en: 'Five defects', vi: 'Năm lỗi' } },
            ],
            correctId: 'a',
          },
          {
            id: 'q2',
            question: { en: 'What did the team decide?', vi: 'Team đã quyết định gì?' },
            choices: [
              {
                id: 'a',
                label: {
                  en: 'Fix it today and strengthen tests',
                  vi: 'Sửa trong hôm nay và tăng cường test',
                },
              },
              { id: 'b', label: { en: 'Postpone all fixes', vi: 'Hoãn toàn bộ sửa lỗi' } },
              { id: 'c', label: { en: 'Remove QA process', vi: 'Bỏ quy trình QA' } },
            ],
            correctId: 'a',
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-12',
    number: 12,
    track: 'frontend',
    title: {
      en: 'CI/CD and Safe Deployment',
      vi: 'CI/CD và triển khai an toàn',
    },
    focus: {
      en: 'Use Japanese expressions for CI pipeline checks, staged rollout, and safe deployment decisions.',
      vi: 'Dùng mẫu tiếng Nhật cho kiểm tra pipeline CI, rollout theo giai đoạn và quyết định deploy an toàn.',
    },
    vocab: [
      { kana: 'パイプライン', romaji: 'paipurain', meaning: { en: 'pipeline', vi: 'pipeline' } },
      {
        kana: 'じどうか',
        kanji: '自動化',
        romaji: 'jidōka',
        meaning: { en: 'automation', vi: 'tự động hóa' },
      },
      { kana: 'ロールアウト', romaji: 'rōruauto', meaning: { en: 'rollout', vi: 'rollout' } },
      {
        kana: 'かいきテスト',
        kanji: '回帰テスト',
        romaji: 'kaiki tesuto',
        meaning: { en: 'regression test', vi: 'regression test' },
      },
      {
        kana: 'ほんばん',
        kanji: '本番',
        romaji: 'honban',
        meaning: { en: 'production', vi: 'production' },
      },
      {
        kana: 'てんかい',
        kanji: '展開',
        romaji: 'tenkai',
        meaning: { en: 'deployment/rollout', vi: 'triển khai' },
      },
      { kana: 'ロールバック', romaji: 'rōrubakku', meaning: { en: 'rollback', vi: 'rollback' } },
      {
        kana: 'けいかい',
        kanji: '警戒',
        romaji: 'keikai',
        meaning: { en: 'alert/caution', vi: 'cảnh báo, đề phòng' },
      },
    ],
    grammar: [
      {
        pattern: 'V（辞書形）おそれがある',
        title: { en: 'There is a risk that', vi: 'Có nguy cơ rằng' },
        explanation: {
          en: 'Use formal risk expressions in release and incident communication.',
          vi: 'Dùng mẫu diễn đạt rủi ro trang trọng khi trao đổi release và sự cố.',
        },
        examples: [
          {
            jp: 'この変更を一度に反映すると、表示速度が落ちるおそれがあります。',
            romaji:
              'Kono henkō o ichido ni han-ei suru to, hyōji sokudo ga ochiru osore ga arimasu.',
            meaning: {
              en: 'If we apply this change all at once, there is a risk rendering speed drops.',
              vi: 'Nếu áp dụng thay đổi này một lần, có nguy cơ tốc độ hiển thị giảm.',
            },
          },
          {
            jp: '監視が不足すると、障害検知が遅れるおそれがあります。',
            romaji: 'Kanshi ga fusoku suru to, shōgai kenchi ga okureru osore ga arimasu.',
            meaning: {
              en: 'If monitoring is insufficient, incident detection may be delayed.',
              vi: 'Nếu giám sát thiếu, việc phát hiện sự cố có thể bị chậm.',
            },
          },
        ],
      },
      {
        pattern: 'V（た形）うえで',
        title: { en: 'After doing and then', vi: 'Sau khi làm rồi' },
        explanation: {
          en: 'Useful for explaining ordered deployment checks before go-live decisions.',
          vi: 'Hữu ích để giải thích thứ tự kiểm tra trước khi quyết định go-live.',
        },
        examples: [
          {
            jp: '検証環境で確認したうえで、本番にデプロイします。',
            romaji: 'Kenshō kankyō de kakunin shita ue de, honban ni depuroi shimasu.',
            meaning: {
              en: 'After verifying in staging, we deploy to production.',
              vi: 'Sau khi xác minh ở staging, chúng tôi deploy lên production.',
            },
          },
          {
            jp: '指標を評価したうえで、ロールアウト範囲を広げます。',
            romaji: 'Shihyō o hyōka shita ue de, rōruauto han-i o hirogemasu.',
            meaning: {
              en: 'After evaluating metrics, we expand rollout scope.',
              vi: 'Sau khi đánh giá chỉ số, chúng tôi mở rộng phạm vi rollout.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-13',
    number: 13,
    track: 'frontend',
    title: {
      en: 'Accessibility and Inclusive UI',
      vi: 'Accessibility và giao diện bao trùm',
    },
    focus: {
      en: 'Discuss accessibility requirements in Japanese and describe inclusive UI implementation strategies.',
      vi: 'Trao đổi yêu cầu accessibility bằng tiếng Nhật và mô tả chiến lược triển khai UI bao trùm.',
    },
    vocab: [
      {
        kana: 'アクセシビリティ',
        romaji: 'akuseshibiriti',
        meaning: { en: 'accessibility', vi: 'khả năng tiếp cận' },
      },
      {
        kana: 'キーボードそうさ',
        kanji: 'キーボード操作',
        romaji: 'kībōdo sōsa',
        meaning: { en: 'keyboard operation', vi: 'thao tác bằng bàn phím' },
      },
      {
        kana: 'たいひど',
        kanji: '対比度',
        romaji: 'taihido',
        meaning: { en: 'contrast ratio', vi: 'độ tương phản' },
      },
      {
        kana: 'スクリーンリーダー',
        romaji: 'sukurīn rīdā',
        meaning: { en: 'screen reader', vi: 'trình đọc màn hình' },
      },
      { kana: 'ラベル', romaji: 'raberu', meaning: { en: 'label', vi: 'nhãn' } },
      {
        kana: 'ariaぞくせい',
        kanji: 'ARIA属性',
        romaji: 'ARIA zokusei',
        meaning: { en: 'ARIA attribute', vi: 'thuộc tính ARIA' },
      },
      {
        kana: 'りようしゃ',
        kanji: '利用者',
        romaji: 'riyōsha',
        meaning: { en: 'user', vi: 'người dùng' },
      },
      {
        kana: 'しえんぎじゅつ',
        kanji: '支援技術',
        romaji: 'shien gijutsu',
        meaning: { en: 'assistive technology', vi: 'công nghệ hỗ trợ' },
      },
    ],
    grammar: [
      {
        pattern: 'N に配慮して',
        title: { en: 'With consideration for', vi: 'Có cân nhắc tới' },
        explanation: {
          en: 'Use this to explain accessibility-aware design decisions.',
          vi: 'Dùng mẫu này để giải thích quyết định thiết kế có cân nhắc accessibility.',
        },
        examples: [
          {
            jp: '視覚に配慮して、ボタンの対比度を上げました。',
            romaji: 'Shikaku ni hairyo shite, botan no taihido o agemashita.',
            meaning: {
              en: 'With visual accessibility in mind, we increased button contrast.',
              vi: 'Có cân nhắc khả năng nhìn, chúng tôi tăng độ tương phản nút.',
            },
          },
          {
            jp: '支援技術に配慮して、入力欄のラベルを明確にしました。',
            romaji: 'Shien gijutsu ni hairyo shite, nyūryokuran no raberu o meikaku ni shimashita.',
            meaning: {
              en: 'Considering assistive technology, we clarified input labels.',
              vi: 'Có cân nhắc công nghệ hỗ trợ, chúng tôi làm rõ nhãn ô nhập.',
            },
          },
        ],
      },
      {
        pattern: 'V（ない形）ようにする',
        title: { en: 'Try to avoid / ensure not', vi: 'Cố gắng tránh / đảm bảo không' },
        explanation: {
          en: 'Use this for UX constraints and accessibility quality practices.',
          vi: 'Dùng mẫu này cho ràng buộc UX và thực hành chất lượng accessibility.',
        },
        examples: [
          {
            jp: 'キーボード操作で迷わないように、タブ順を調整します。',
            romaji: 'Kībōdo sōsa de mayowanai yō ni, tabu-jun o chōsei shimasu.',
            meaning: {
              en: 'We adjust tab order so users do not get lost with keyboard operation.',
              vi: 'Chúng tôi điều chỉnh tab order để người dùng không bị lạc khi thao tác bàn phím.',
            },
          },
          {
            jp: '読み上げが途切れないように、ARIA属性を見直しました。',
            romaji: 'Yomiage ga togirenai yō ni, ARIA zokusei o minaoshimashita.',
            meaning: {
              en: 'We reviewed ARIA attributes so screen reading does not break.',
              vi: 'Chúng tôi xem lại thuộc tính ARIA để trình đọc không bị ngắt quãng.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-14',
    number: 14,
    track: 'frontend',
    title: {
      en: 'Performance Optimization and Bundle Strategy',
      vi: 'Tối ưu hiệu năng và chiến lược bundle',
    },
    focus: {
      en: 'Use frontend performance vocabulary in Japanese and explain optimization actions with clear rationale.',
      vi: 'Dùng từ vựng hiệu năng frontend bằng tiếng Nhật và giải thích hành động tối ưu có cơ sở.',
    },
    vocab: [
      { kana: 'バンドル', romaji: 'bandoru', meaning: { en: 'bundle', vi: 'bundle' } },
      {
        kana: 'ぶんかつ',
        kanji: '分割',
        romaji: 'bunkatsu',
        meaning: { en: 'split/chunking', vi: 'chia tách' },
      },
      {
        kana: 'よびだし',
        kanji: '呼び出し',
        romaji: 'yobidashi',
        meaning: { en: 'invocation/call', vi: 'gọi thực thi' },
      },
      {
        kana: 'ちえんよみこみ',
        kanji: '遅延読み込み',
        romaji: 'chien yomikomi',
        meaning: { en: 'lazy loading', vi: 'tải trễ' },
      },
      { kana: 'キャッシュ', romaji: 'kyasshu', meaning: { en: 'cache', vi: 'cache' } },
      {
        kana: 'しょりじかん',
        kanji: '処理時間',
        romaji: 'shori jikan',
        meaning: { en: 'processing time', vi: 'thời gian xử lý' },
      },
      {
        kana: 'しひょう',
        kanji: '指標',
        romaji: 'shihyō',
        meaning: { en: 'metric', vi: 'chỉ số' },
      },
      {
        kana: 'そくてい',
        kanji: '測定',
        romaji: 'sokutei',
        meaning: { en: 'measurement', vi: 'đo lường' },
      },
    ],
    grammar: [
      {
        pattern: 'V（辞書形）ために',
        title: { en: 'For the purpose of', vi: 'Nhằm mục đích' },
        explanation: {
          en: 'Use this to justify performance optimization decisions.',
          vi: 'Dùng mẫu này để nêu lý do cho quyết định tối ưu hiệu năng.',
        },
        examples: [
          {
            jp: '初回表示を速くするために、バンドルを分割しました。',
            romaji: 'Shokai hyōji o hayaku suru tame ni, bandoru o bunkatsu shimashita.',
            meaning: {
              en: 'To speed up initial render, we split the bundle.',
              vi: 'Để tăng tốc hiển thị lần đầu, chúng tôi chia bundle.',
            },
          },
          {
            jp: '処理時間を減らすために、重い計算をメモ化しました。',
            romaji: 'Shori jikan o herasu tame ni, omoi keisan o memoka shimashita.',
            meaning: {
              en: 'To reduce processing time, we memoized heavy computations.',
              vi: 'Để giảm thời gian xử lý, chúng tôi memo hóa các phép tính nặng.',
            },
          },
        ],
      },
      {
        pattern: 'V（た形）結果',
        title: { en: 'As a result of doing', vi: 'Kết quả sau khi làm' },
        explanation: {
          en: 'Use this pattern to connect optimization actions to measurable outcomes.',
          vi: 'Dùng mẫu này để nối hành động tối ưu với kết quả đo được.',
        },
        examples: [
          {
            jp: '画像を最適化した結果、ページ速度が改善しました。',
            romaji: 'Gazō o saitekika shita kekka, pēji sokudo ga kaizen shimashita.',
            meaning: {
              en: 'As a result of image optimization, page speed improved.',
              vi: 'Kết quả của việc tối ưu ảnh là tốc độ trang đã cải thiện.',
            },
          },
          {
            jp: 'キャッシュ設定を見直した結果、再訪問時の読み込みが速くなりました。',
            romaji:
              'Kyasshu settei o minaoshita kekka, sai-hōmonji no yomikomi ga hayaku narimashita.',
            meaning: {
              en: 'After reviewing cache settings, revisit load time became faster.',
              vi: 'Sau khi xem lại cấu hình cache, tốc độ tải ở lần truy cập lại nhanh hơn.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-15',
    number: 15,
    track: 'frontend',
    title: {
      en: 'Frontend Security Basics',
      vi: 'Nền tảng bảo mật frontend',
    },
    focus: {
      en: 'Practice Japanese for discussing common web security risks and mitigation strategies in frontend apps.',
      vi: 'Luyện tiếng Nhật để trao đổi rủi ro bảo mật web phổ biến và chiến lược giảm thiểu trong app frontend.',
    },
    vocab: [
      { kana: 'セキュリティ', romaji: 'sekyuriti', meaning: { en: 'security', vi: 'bảo mật' } },
      {
        kana: 'ぜいじゃくせい',
        kanji: '脆弱性',
        romaji: 'zeijakusei',
        meaning: { en: 'vulnerability', vi: 'lỗ hổng' },
      },
      {
        kana: 'にんしょう',
        kanji: '認証',
        romaji: 'ninshō',
        meaning: { en: 'authentication', vi: 'xác thực' },
      },
      {
        kana: 'にんか',
        kanji: '認可',
        romaji: 'ninka',
        meaning: { en: 'authorization', vi: 'phân quyền' },
      },
      { kana: 'トークン', romaji: 'tōkun', meaning: { en: 'token', vi: 'token' } },
      {
        kana: 'サニタイズ',
        romaji: 'sanitaizu',
        meaning: { en: 'sanitize', vi: 'làm sạch dữ liệu' },
      },
      {
        kana: 'えんごうか',
        kanji: '暗号化',
        romaji: 'angōka',
        meaning: { en: 'encryption', vi: 'mã hóa' },
      },
      {
        kana: 'こうげき',
        kanji: '攻撃',
        romaji: 'kōgeki',
        meaning: { en: 'attack', vi: 'tấn công' },
      },
    ],
    grammar: [
      {
        pattern: 'V（ない形）ために',
        title: { en: 'In order not to', vi: 'Để không' },
        explanation: {
          en: 'Use this to describe preventive security controls.',
          vi: 'Dùng mẫu này để mô tả kiểm soát phòng ngừa bảo mật.',
        },
        examples: [
          {
            jp: '不正アクセスを防ぐために、多要素認証を導入しました。',
            romaji: 'Fusei akusesu o fusegu tame ni, ta-yōso ninshō o dōnyū shimashita.',
            meaning: {
              en: 'To prevent unauthorized access, we introduced multi-factor authentication.',
              vi: 'Để ngăn truy cập trái phép, chúng tôi áp dụng xác thực đa yếu tố.',
            },
          },
          {
            jp: 'XSSを起こさないために、入力値をサニタイズします。',
            romaji: 'XSS o okosanai tame ni, nyūryokuchi o sanitaizu shimasu.',
            meaning: {
              en: 'To avoid XSS, we sanitize input values.',
              vi: 'Để tránh XSS, chúng tôi làm sạch dữ liệu đầu vào.',
            },
          },
        ],
      },
      {
        pattern: 'N によって',
        title: { en: 'Depending on / by', vi: 'Tùy theo / bởi' },
        explanation: {
          en: 'Useful for explaining security impact differences by environment or implementation.',
          vi: 'Hữu ích khi giải thích mức ảnh hưởng bảo mật tùy môi trường hoặc cách triển khai.',
        },
        examples: [
          {
            jp: '実装方法によって、脆弱性のリスクが大きく変わります。',
            romaji: 'Jissō hōhō ni yotte, zeijakusei no risuku ga ōkiku kawarimasu.',
            meaning: {
              en: 'Vulnerability risk changes greatly depending on implementation method.',
              vi: 'Rủi ro lỗ hổng thay đổi đáng kể tùy theo cách triển khai.',
            },
          },
          {
            jp: '運用環境によって、必要な対策が異なります。',
            romaji: 'Un-yō kankyō ni yotte, hitsuyō na taisaku ga kotonarimasu.',
            meaning: {
              en: 'Required countermeasures differ depending on operating environment.',
              vi: 'Biện pháp cần thiết khác nhau tùy môi trường vận hành.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-16',
    number: 16,
    track: 'frontend',
    title: {
      en: 'Design System Operations',
      vi: 'Vận hành design system',
    },
    focus: {
      en: 'Learn Japanese for managing component libraries, token governance, and UI consistency across products.',
      vi: 'Học tiếng Nhật cho việc quản lý thư viện component, governance token và tính nhất quán UI xuyên sản phẩm.',
    },
    vocab: [
      {
        kana: 'デザインシステム',
        romaji: 'dezain shisutemu',
        meaning: { en: 'design system', vi: 'design system' },
      },
      {
        kana: 'デザイントークン',
        romaji: 'dezain tōkun',
        meaning: { en: 'design token', vi: 'design token' },
      },
      {
        kana: 'いっかんせい',
        kanji: '一貫性',
        romaji: 'ikkansei',
        meaning: { en: 'consistency', vi: 'tính nhất quán' },
      },
      {
        kana: 'さいりよう',
        kanji: '再利用',
        romaji: 'sairiyō',
        meaning: { en: 'reuse', vi: 'tái sử dụng' },
      },
      {
        kana: 'ドキュメント',
        romaji: 'dokyumento',
        meaning: { en: 'documentation', vi: 'tài liệu' },
      },
      {
        kana: 'はんえい',
        kanji: '反映',
        romaji: 'han-ei',
        meaning: { en: 'reflect/apply', vi: 'phản ánh, áp dụng' },
      },
      {
        kana: 'ひょうじルール',
        kanji: '表示ルール',
        romaji: 'hyōji rūru',
        meaning: { en: 'display rules', vi: 'quy tắc hiển thị' },
      },
      {
        kana: 'けっていじこう',
        kanji: '決定事項',
        romaji: 'kettei jikō',
        meaning: { en: 'decisions made', vi: 'hạng mục đã quyết' },
      },
    ],
    grammar: [
      {
        pattern: 'V（辞書形）ようにする',
        title: { en: 'Make it a practice to', vi: 'Duy trì thói quen làm' },
        explanation: {
          en: 'Use this to describe team conventions in design system operations.',
          vi: 'Dùng mẫu này để mô tả convention team trong vận hành design system.',
        },
        examples: [
          {
            jp: '新しいコンポーネントは必ずドキュメント化するようにしています。',
            romaji: 'Atarashii konpōnento wa kanarazu dokyumentoka suru yō ni shite imasu.',
            meaning: {
              en: 'We make it a practice to document every new component.',
              vi: 'Chúng tôi duy trì việc tài liệu hóa mọi component mới.',
            },
          },
          {
            jp: '変更点はすぐにトークンへ反映するようにしています。',
            romaji: 'Henkōten wa sugu ni tōkun e han-ei suru yō ni shite imasu.',
            meaning: {
              en: 'We try to reflect changes in tokens immediately.',
              vi: 'Chúng tôi cố gắng phản ánh điểm thay đổi vào token ngay lập tức.',
            },
          },
        ],
      },
      {
        pattern: 'N ことになっている',
        title: { en: 'It is a rule that', vi: 'Quy định là' },
        explanation: {
          en: 'Use this for process rules that keep UI consistency.',
          vi: 'Dùng mẫu này cho các quy định quy trình giúp giữ UI nhất quán.',
        },
        examples: [
          {
            jp: '共通ボタンはdesign systemから使うことになっています。',
            romaji: 'Kyōtsū botan wa design system kara tsukau koto ni natte imasu.',
            meaning: {
              en: 'It is a rule to use common buttons from the design system.',
              vi: 'Quy định là dùng nút chung từ design system.',
            },
          },
          {
            jp: '新規画面はUIレビューを通してから公開することになっています。',
            romaji: 'Shinki gamen wa UI rebyū o tōshite kara kōkai suru koto ni natte imasu.',
            meaning: {
              en: 'It is required that new screens pass UI review before release.',
              vi: 'Quy định là màn hình mới phải qua UI review trước khi phát hành.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-17',
    number: 17,
    track: 'frontend',
    title: {
      en: 'API Integration and Data Fetching',
      vi: 'Tích hợp API và lấy dữ liệu',
    },
    focus: {
      en: 'Use practical Japanese to discuss API integration, error handling, and data consistency in frontend apps.',
      vi: 'Dùng tiếng Nhật thực tế để trao đổi tích hợp API, xử lý lỗi và tính nhất quán dữ liệu trong frontend app.',
    },
    vocab: [
      {
        kana: 'データフェッチ',
        romaji: 'dēta fetchi',
        meaning: { en: 'data fetching', vi: 'lấy dữ liệu' },
      },
      {
        kana: 'えらーしょり',
        kanji: 'エラー処理',
        romaji: 'erā shori',
        meaning: { en: 'error handling', vi: 'xử lý lỗi' },
      },
      { kana: 'レスポンス', romaji: 'resuponsu', meaning: { en: 'response', vi: 'response' } },
      {
        kana: 'たいきじかん',
        kanji: '待機時間',
        romaji: 'taiki jikan',
        meaning: { en: 'latency', vi: 'độ trễ' },
      },
      {
        kana: 'しんらいせい',
        kanji: '信頼性',
        romaji: 'shinraisei',
        meaning: { en: 'reliability', vi: 'độ tin cậy' },
      },
      {
        kana: 'せいごうせい',
        kanji: '整合性',
        romaji: 'seigōsei',
        meaning: { en: 'consistency', vi: 'tính nhất quán' },
      },
      {
        kana: 'キャッシュせいぎょ',
        kanji: 'キャッシュ制御',
        romaji: 'kyasshu seigyo',
        meaning: { en: 'cache control', vi: 'kiểm soát cache' },
      },
      { kana: 'リトライ', romaji: 'ritorai', meaning: { en: 'retry', vi: 'thử lại' } },
    ],
    grammar: [
      {
        pattern: 'N に対して',
        title: { en: 'In response to / for', vi: 'Để phản hồi / đối với' },
        explanation: {
          en: 'Use this for frontend responses to backend behavior and API changes.',
          vi: 'Dùng mẫu này cho cách frontend phản hồi hành vi backend và thay đổi API.',
        },
        examples: [
          {
            jp: 'タイムアウトに対して、リトライ処理を実装しました。',
            romaji: 'Taimuauto ni taishite, ritorai shori o jissō shimashita.',
            meaning: {
              en: 'We implemented retry logic in response to timeouts.',
              vi: 'Chúng tôi triển khai logic retry để phản hồi timeout.',
            },
          },
          {
            jp: 'API変更に対して、画面側の型定義を更新しました。',
            romaji: 'API henkō ni taishite, gamen-gawa no kata teigi o kōshin shimashita.',
            meaning: {
              en: 'In response to API changes, we updated type definitions on UI side.',
              vi: 'Để phản hồi thay đổi API, chúng tôi cập nhật định nghĩa kiểu phía giao diện.',
            },
          },
        ],
      },
      {
        pattern: 'V（ない形）ことには～ない',
        title: { en: 'Unless ~, cannot', vi: 'Nếu không ~ thì không thể' },
        explanation: {
          en: 'Useful for expressing required prerequisites in integration workflows.',
          vi: 'Hữu ích để diễn đạt điều kiện tiên quyết trong luồng tích hợp.',
        },
        examples: [
          {
            jp: '仕様を確認しないことには、正しく実装できません。',
            romaji: 'Shiyō o kakunin shinai koto ni wa, tadashiku jissō dekimasen.',
            meaning: {
              en: 'Unless we verify the spec, we cannot implement correctly.',
              vi: 'Nếu không xác nhận đặc tả thì không thể triển khai đúng.',
            },
          },
          {
            jp: 'エラーパターンを集めないことには、十分な対策は立てられません。',
            romaji: 'Erā patān o atsumenai koto ni wa, jūbun na taisaku wa tateraremasen.',
            meaning: {
              en: 'Unless we gather error patterns, we cannot prepare sufficient countermeasures.',
              vi: 'Nếu không thu thập pattern lỗi thì không thể xây biện pháp đầy đủ.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-18',
    number: 18,
    track: 'frontend',
    title: {
      en: 'State Management at Scale',
      vi: 'Quản lý state ở quy mô lớn',
    },
    focus: {
      en: 'Discuss scalable state architecture and data-flow decisions with practical workplace Japanese.',
      vi: 'Trao đổi kiến trúc state có thể mở rộng và quyết định data-flow bằng tiếng Nhật nơi làm việc.',
    },
    vocab: [
      {
        kana: 'じょうたいかんり',
        kanji: '状態管理',
        romaji: 'jōtai kanri',
        meaning: { en: 'state management', vi: 'quản lý trạng thái' },
      },
      {
        kana: 'データフロー',
        romaji: 'dēta furō',
        meaning: { en: 'data flow', vi: 'luồng dữ liệu' },
      },
      {
        kana: 'ぐローバルステート',
        romaji: 'gurōbaru sutēto',
        meaning: { en: 'global state', vi: 'state toàn cục' },
      },
      {
        kana: 'ローカルステート',
        romaji: 'rōkaru sutēto',
        meaning: { en: 'local state', vi: 'state cục bộ' },
      },
      {
        kana: 'しんらいせい',
        kanji: '信頼性',
        romaji: 'shinraisei',
        meaning: { en: 'reliability', vi: 'độ tin cậy' },
      },
      {
        kana: 'ふくざつか',
        kanji: '複雑化',
        romaji: 'fukuzatsuka',
        meaning: { en: 'increasing complexity', vi: 'sự phức tạp hóa' },
      },
      {
        kana: 'かんし',
        kanji: '監視',
        romaji: 'kanshi',
        meaning: { en: 'monitoring', vi: 'giám sát' },
      },
      {
        kana: 'いぞん',
        kanji: '依存',
        romaji: 'izon',
        meaning: { en: 'dependency', vi: 'phụ thuộc' },
      },
    ],
    grammar: [
      {
        pattern: 'V（辞書形）につれて',
        title: { en: 'As ~ changes gradually', vi: 'Càng ~ thì càng' },
        explanation: {
          en: 'Use this for discussing architecture complexity as product scale grows.',
          vi: 'Dùng mẫu này khi nói độ phức tạp kiến trúc tăng theo quy mô sản phẩm.',
        },
        examples: [
          {
            jp: '機能が増えるにつれて、状態管理も複雑になります。',
            romaji: 'Kinō ga fueru ni tsurete, jōtai kanri mo fukuzatsu ni narimasu.',
            meaning: {
              en: 'As features increase, state management also becomes more complex.',
              vi: 'Càng nhiều tính năng, quản lý state càng phức tạp.',
            },
          },
          {
            jp: '利用者が増えるにつれて、監視の重要性が高まります。',
            romaji: 'Riyōsha ga fueru ni tsurete, kanshi no jūyōsei ga takamarimasu.',
            meaning: {
              en: 'As users increase, monitoring importance rises.',
              vi: 'Càng nhiều người dùng, tầm quan trọng của giám sát càng tăng.',
            },
          },
        ],
      },
      {
        pattern: 'N を踏まえて',
        title: { en: 'Taking ~ into account', vi: 'Tính đến ~' },
        explanation: {
          en: 'Useful for explaining architectural decisions with context.',
          vi: 'Hữu ích để giải thích quyết định kiến trúc có xét bối cảnh.',
        },
        examples: [
          {
            jp: '依存関係を踏まえて、global stateの範囲を縮小しました。',
            romaji: 'Izon kankei o fumaete, global state no han-i o shukushō shimashita.',
            meaning: {
              en: 'Taking dependencies into account, we reduced global state scope.',
              vi: 'Tính đến quan hệ phụ thuộc, chúng tôi thu hẹp phạm vi global state.',
            },
          },
          {
            jp: '運用コストを踏まえて、段階的に移行します。',
            romaji: 'Un-yō kosuto o fumaete, dankai-teki ni ikō shimasu.',
            meaning: {
              en: 'Considering operation cost, we migrate in phases.',
              vi: 'Tính đến chi phí vận hành, chúng tôi chuyển đổi theo giai đoạn.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-19',
    number: 19,
    track: 'frontend',
    title: {
      en: 'Analytics, Metrics, and Experimentation',
      vi: 'Analytics, metrics và thử nghiệm',
    },
    focus: {
      en: 'Learn Japanese for product metrics, tracking plans, and A/B testing communication.',
      vi: 'Học tiếng Nhật cho metric sản phẩm, kế hoạch tracking và giao tiếp A/B testing.',
    },
    vocab: [
      {
        kana: 'しひょう',
        kanji: '指標',
        romaji: 'shihyō',
        meaning: { en: 'metric', vi: 'chỉ số' },
      },
      {
        kana: 'コンバージョン',
        romaji: 'konbājhon',
        meaning: { en: 'conversion', vi: 'chuyển đổi' },
      },
      {
        kana: 'りだつりつ',
        kanji: '離脱率',
        romaji: 'ridatsuritsu',
        meaning: { en: 'drop-off rate', vi: 'tỷ lệ rời bỏ' },
      },
      { kana: 'ABテスト', romaji: 'AB tesuto', meaning: { en: 'A/B test', vi: 'A/B test' } },
      {
        kana: 'けんしょうこうもく',
        kanji: '検証項目',
        romaji: 'kenshō kōmoku',
        meaning: { en: 'validation item', vi: 'hạng mục kiểm chứng' },
      },
      {
        kana: 'こうかそくてい',
        kanji: '効果測定',
        romaji: 'kōka sokutei',
        meaning: { en: 'effect measurement', vi: 'đo lường hiệu quả' },
      },
      {
        kana: 'かせつ',
        kanji: '仮説',
        romaji: 'kasetsu',
        meaning: { en: 'hypothesis', vi: 'giả thuyết' },
      },
      {
        kana: 'けつろん',
        kanji: '結論',
        romaji: 'ketsuron',
        meaning: { en: 'conclusion', vi: 'kết luận' },
      },
    ],
    grammar: [
      {
        pattern: 'V（辞書形）ことで',
        title: { en: 'By doing ~, result', vi: 'Bằng cách ~ thì' },
        explanation: {
          en: 'Use this pattern to explain how product changes affect metrics.',
          vi: 'Dùng mẫu này để giải thích thay đổi sản phẩm ảnh hưởng chỉ số ra sao.',
        },
        examples: [
          {
            jp: '入力項目を減らすことで、完了率が上がりました。',
            romaji: 'Nyūryoku kōmoku o herasu koto de, kanryōritsu ga agarimashita.',
            meaning: {
              en: 'By reducing input fields, completion rate increased.',
              vi: 'Bằng cách giảm trường nhập, tỷ lệ hoàn thành đã tăng.',
            },
          },
          {
            jp: '案内文を改善することで、離脱率を下げられます。',
            romaji: 'An-naibun o kaizen suru koto de, ridatsuritsu o sageraremasu.',
            meaning: {
              en: 'By improving guidance copy, we can reduce drop-off rate.',
              vi: 'Bằng cách cải thiện nội dung hướng dẫn, chúng tôi có thể giảm tỷ lệ rời bỏ.',
            },
          },
        ],
      },
      {
        pattern: 'N に基づいて',
        title: { en: 'Based on', vi: 'Dựa trên' },
        explanation: {
          en: 'Use this for data-driven product decisions.',
          vi: 'Dùng mẫu này cho quyết định sản phẩm dựa trên dữ liệu.',
        },
        examples: [
          {
            jp: '実験結果に基づいて、次の施策を決めます。',
            romaji: 'Jikken kekka ni motozuite, tsugi no shisaku o kimemasu.',
            meaning: {
              en: 'Based on experiment results, we decide the next action.',
              vi: 'Dựa trên kết quả thử nghiệm, chúng tôi quyết định bước tiếp theo.',
            },
          },
          {
            jp: '利用データに基づいて、仮説を修正しました。',
            romaji: 'Riyō dēta ni motozuite, kasetsu o shūsei shimashita.',
            meaning: {
              en: 'Based on usage data, we refined the hypothesis.',
              vi: 'Dựa trên dữ liệu sử dụng, chúng tôi chỉnh lại giả thuyết.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-20',
    number: 20,
    track: 'frontend',
    title: {
      en: 'Agile Communication and Team Rituals',
      vi: 'Giao tiếp agile và nghi thức team',
    },
    focus: {
      en: 'Practice workplace Japanese for standups, sprint retrospectives, and cross-functional alignment.',
      vi: 'Luyện tiếng Nhật nơi làm việc cho standup, retrospective sprint và đồng bộ liên chức năng.',
    },
    vocab: [
      {
        kana: 'デイリースタンドアップ',
        romaji: 'deirī sutandoappu',
        meaning: { en: 'daily standup', vi: 'daily standup' },
      },
      {
        kana: 'ふりかえり',
        kanji: '振り返り',
        romaji: 'furikaeri',
        meaning: { en: 'retrospective', vi: 'retrospective' },
      },
      {
        kana: 'しんちょく',
        kanji: '進捗',
        romaji: 'shinchoku',
        meaning: { en: 'progress', vi: 'tiến độ' },
      },
      {
        kana: 'かだい',
        kanji: '課題',
        romaji: 'kadai',
        meaning: { en: 'issue/task', vi: 'vấn đề, đầu việc' },
      },
      {
        kana: 'そしき',
        kanji: '阻止',
        romaji: 'soshi',
        meaning: { en: 'blocking prevention', vi: 'ngăn chặn trì hoãn' },
      },
      {
        kana: 'ちょうせい',
        kanji: '調整',
        romaji: 'chōsei',
        meaning: { en: 'coordination', vi: 'điều phối' },
      },
      {
        kana: 'ごういけいせい',
        kanji: '合意形成',
        romaji: 'gōi keisei',
        meaning: { en: 'consensus building', vi: 'xây đồng thuận' },
      },
      {
        kana: 'いらい',
        kanji: '依頼',
        romaji: 'irai',
        meaning: { en: 'request', vi: 'đề nghị, yêu cầu' },
      },
    ],
    grammar: [
      {
        pattern: 'N に関して',
        title: { en: 'Regarding', vi: 'Liên quan đến' },
        explanation: {
          en: 'Formal and useful for standup and planning communication.',
          vi: 'Trang trọng, hữu ích trong giao tiếp standup và planning.',
        },
        examples: [
          {
            jp: '今週の進捗に関して、三点共有します。',
            romaji: 'Konshū no shinchoku ni kanshite, san-ten kyōyū shimasu.',
            meaning: {
              en: 'Regarding this week’s progress, I will share three points.',
              vi: 'Liên quan đến tiến độ tuần này, tôi sẽ chia sẻ ba điểm.',
            },
          },
          {
            jp: 'リリース計画に関して、確認したい点があります。',
            romaji: 'Rirīsu keikaku ni kanshite, kakunin shitai ten ga arimasu.',
            meaning: {
              en: 'Regarding the release plan, there are points I want to confirm.',
              vi: 'Liên quan kế hoạch release, có vài điểm tôi muốn xác nhận.',
            },
          },
        ],
      },
      {
        pattern: 'V（てもらえると助かる',
        title: { en: 'It would help if you could', vi: 'Nếu bạn có thể... thì rất tốt' },
        explanation: {
          en: 'A soft and collaborative request style useful in agile teamwork.',
          vi: 'Cách đề nghị mềm, mang tính hợp tác, hữu ích trong teamwork agile.',
        },
        examples: [
          {
            jp: 'この課題を今日中に確認してもらえると助かります。',
            romaji: 'Kono kadai o kyōjū ni kakunin shite moraeru to tasukarimasu.',
            meaning: {
              en: 'It would help if you could review this issue today.',
              vi: 'Nếu bạn có thể kiểm tra issue này trong hôm nay thì rất tốt.',
            },
          },
          {
            jp: '会議前に資料を共有してもらえると助かります。',
            romaji: 'Kaigi mae ni shiryō o kyōyū shite moraeru to tasukarimasu.',
            meaning: {
              en: 'It would help if you could share materials before the meeting.',
              vi: 'Nếu bạn có thể chia sẻ tài liệu trước cuộc họp thì rất hữu ích.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-21',
    number: 21,
    track: 'frontend',
    title: {
      en: 'HTML Structure and Markup Bug Reports',
      vi: 'Cấu trúc HTML và báo lỗi markup',
    },
    focus: {
      en: 'Learn practical HTML vocabulary in Japanese and report markup bugs with clear reproduction details.',
      vi: 'Học từ vựng HTML thực tế bằng tiếng Nhật và báo lỗi markup với mô tả tái hiện rõ ràng.',
    },
    vocab: [
      { kana: 'HTMLこうぞう', kanji: 'HTML構造', romaji: 'HTML kōzō', meaning: { en: 'HTML structure', vi: 'cấu trúc HTML' } },
      { kana: 'マークアップ', romaji: 'mākuappu', meaning: { en: 'markup', vi: 'markup' } },
      { kana: 'ようそ', kanji: '要素', romaji: 'yōso', meaning: { en: 'element', vi: 'phần tử' } },
      { kana: 'ぞくせい', kanji: '属性', romaji: 'zokusei', meaning: { en: 'attribute', vi: 'thuộc tính' } },
      { kana: 'みだしタグ', kanji: '見出しタグ', romaji: 'midashi tagu', meaning: { en: 'heading tag', vi: 'thẻ tiêu đề' } },
      { kana: 'だんらく', kanji: '段落', romaji: 'danraku', meaning: { en: 'paragraph', vi: 'đoạn văn' } },
      { kana: 'フォーム', romaji: 'fōmu', meaning: { en: 'form', vi: 'biểu mẫu' } },
      { kana: 'にゅうりょくらん', kanji: '入力欄', romaji: 'nyūryokuran', meaning: { en: 'input field', vi: 'ô nhập liệu' } },
      { kana: 'けっそん', kanji: '欠損', romaji: 'kesson', meaning: { en: 'missing part', vi: 'phần bị thiếu' } },
      { kana: 'じゅうふく', kanji: '重複', romaji: 'jūfuku', meaning: { en: 'duplication', vi: 'trùng lặp' } },
    ],
    grammar: [
      {
        pattern: 'N が欠けている',
        title: { en: 'Something is missing', vi: 'Một thành phần bị thiếu' },
        explanation: {
          en: 'Use this pattern to report missing tags, labels, or attributes in bug reports.',
          vi: 'Dùng mẫu này để báo thiếu thẻ, nhãn, hoặc thuộc tính trong bug report.',
        },
        examples: [
          {
            jp: 'ログインフォームでlabel要素が欠けています。',
            romaji: 'Roguin fōmu de label yōso ga kakete imasu.',
            meaning: {
              en: 'The label element is missing in the login form.',
              vi: 'Phần tử label đang bị thiếu trong form đăng nhập.',
            },
          },
          {
            jp: 'このボタンにはtype属性が欠けています。',
            romaji: 'Kono botan ni wa type zokusei ga kakete imasu.',
            meaning: {
              en: 'This button is missing the type attribute.',
              vi: 'Nút này đang thiếu thuộc tính type.',
            },
          },
        ],
      },
      {
        pattern: 'N が重複している',
        title: { en: 'Something is duplicated', vi: 'Một thành phần bị trùng lặp' },
        explanation: {
          en: 'Use this to describe duplicated IDs, repeated DOM nodes, or repeated messages.',
          vi: 'Dùng mẫu này để mô tả ID trùng, node DOM lặp, hoặc thông báo hiển thị lặp.',
        },
        examples: [
          {
            jp: '同じidが重複しているため、正しく関連付けできません。',
            romaji: 'Onaji id ga jūfuku shite iru tame, tadashiku kanrenzuke dekimasen.',
            meaning: {
              en: 'Because the same ID is duplicated, elements cannot be linked correctly.',
              vi: 'Do cùng một ID bị trùng lặp nên không thể liên kết phần tử đúng cách.',
            },
          },
          {
            jp: 'エラーメッセージが二回重複して表示されています。',
            romaji: 'Erā messēji ga nikai jūfuku shite hyōji sarete imasu.',
            meaning: {
              en: 'The error message is displayed twice.',
              vi: 'Thông báo lỗi đang được hiển thị trùng hai lần.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-22',
    number: 22,
    track: 'frontend',
    title: {
      en: 'CSS Layout and Visual Bug Reporting',
      vi: 'Báo lỗi layout và hiển thị với CSS',
    },
    focus: {
      en: 'Use Japanese CSS vocabulary to report layout breaks, spacing problems, and responsive UI issues.',
      vi: 'Dùng từ vựng CSS tiếng Nhật để báo lỗi vỡ layout, lỗi khoảng cách và lỗi responsive.',
    },
    vocab: [
      { kana: 'レイアウト', romaji: 'reiauto', meaning: { en: 'layout', vi: 'bố cục' } },
      { kana: 'フレックスボックス', romaji: 'furekkusu bokkusu', meaning: { en: 'flexbox', vi: 'flexbox' } },
      { kana: 'グリッド', romaji: 'guriddo', meaning: { en: 'grid', vi: 'grid' } },
      { kana: 'よはく', kanji: '余白', romaji: 'yohaku', meaning: { en: 'spacing/whitespace', vi: 'khoảng trắng, khoảng cách' } },
      { kana: 'マージン', romaji: 'mājin', meaning: { en: 'margin', vi: 'margin' } },
      { kana: 'パディング', romaji: 'paddingu', meaning: { en: 'padding', vi: 'padding' } },
      { kana: 'かさなりじゅん', kanji: '重なり順', romaji: 'kasanari-jun', meaning: { en: 'stacking order', vi: 'thứ tự chồng lớp' } },
      { kana: 'レスポンシブ', romaji: 'resuponshibu', meaning: { en: 'responsive', vi: 'responsive' } },
      { kana: 'メディアクエリ', romaji: 'media kueri', meaning: { en: 'media query', vi: 'media query' } },
      { kana: 'はみだし', kanji: 'はみ出し', romaji: 'hamidashi', meaning: { en: 'overflow protrusion', vi: 'tràn ra ngoài' } },
    ],
    grammar: [
      {
        pattern: 'N のせいで',
        title: { en: 'Because of (negative cause)', vi: 'Vì (nguyên nhân tiêu cực)' },
        explanation: {
          en: 'Use this when identifying the probable CSS cause of a visual issue.',
          vi: 'Dùng mẫu này khi chỉ ra nguyên nhân CSS có khả năng gây lỗi hiển thị.',
        },
        examples: [
          {
            jp: 'margin設定のせいで、カード同士が重なっています。',
            romaji: 'Margin settei no sei de, kādo dōshi ga kasanatte imasu.',
            meaning: {
              en: 'Because of margin settings, cards are overlapping.',
              vi: 'Vì cấu hình margin, các card đang bị chồng lên nhau.',
            },
          },
          {
            jp: 'z-indexの指定ミスのせいで、モーダルが背景の下に表示されます。',
            romaji: 'Z-index no shitei misu no sei de, mōdaru ga haikei no shita ni hyōji saremasu.',
            meaning: {
              en: 'Because of a z-index mistake, the modal appears under the background.',
              vi: 'Vì lỗi chỉ định z-index, modal hiển thị dưới lớp nền.',
            },
          },
        ],
      },
      {
        pattern: 'V（ない形）ために',
        title: { en: 'In order not to', vi: 'Để không' },
        explanation: {
          en: 'Use this for prevention actions in CSS bug fix plans.',
          vi: 'Dùng mẫu này cho hành động phòng ngừa trong kế hoạch sửa lỗi CSS.',
        },
        examples: [
          {
            jp: '画面幅で崩れないために、breakpointを見直します。',
            romaji: 'Gamen haba de kuzurenai tame ni, breakpoint o minaoshimasu.',
            meaning: {
              en: 'To avoid layout break on different widths, we will review breakpoints.',
              vi: 'Để layout không vỡ theo độ rộng màn hình, chúng tôi sẽ xem lại breakpoint.',
            },
          },
          {
            jp: '文字がはみ出さないために、折り返しルールを追加しました。',
            romaji: 'Moji ga hamidasanai tame ni, orikaeshi rūru o tsuika shimashita.',
            meaning: {
              en: 'To prevent text overflow, we added wrapping rules.',
              vi: 'Để chữ không bị tràn, chúng tôi đã thêm quy tắc xuống dòng.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'lesson-23',
    number: 23,
    track: 'frontend',
    title: {
      en: 'JavaScript Runtime Errors and Debug Reports',
      vi: 'Lỗi runtime JavaScript và báo cáo debug',
    },
    focus: {
      en: 'Practice Japanese expressions for reporting JavaScript exceptions, async failures, and debugging findings.',
      vi: 'Luyện mẫu tiếng Nhật để báo lỗi exception JavaScript, lỗi bất đồng bộ và kết quả debug.',
    },
    vocab: [
      { kana: 'JavaScriptじっこうじエラー', kanji: 'JavaScript実行時エラー', romaji: 'JavaScript jikkōji erā', meaning: { en: 'JavaScript runtime error', vi: 'lỗi runtime JavaScript' } },
      { kana: 'れいがい', kanji: '例外', romaji: 'reigai', meaning: { en: 'exception', vi: 'ngoại lệ' } },
      { kana: 'スタックトレース', romaji: 'sutakku torēsu', meaning: { en: 'stack trace', vi: 'stack trace' } },
      { kana: 'みていぎ', kanji: '未定義', romaji: 'miteigi', meaning: { en: 'undefined', vi: 'chưa định nghĩa' } },
      { kana: 'nullち', kanji: 'null値', romaji: 'null chi', meaning: { en: 'null value', vi: 'giá trị null' } },
      { kana: 'へんすうスコープ', kanji: '変数スコープ', romaji: 'hensū sukōpu', meaning: { en: 'variable scope', vi: 'phạm vi biến' } },
      { kana: 'ひどうきしょり', kanji: '非同期処理', romaji: 'hidōki shori', meaning: { en: 'asynchronous processing', vi: 'xử lý bất đồng bộ' } },
      { kana: 'Promiseきょひ', kanji: 'Promise拒否', romaji: 'Promise kyohi', meaning: { en: 'promise rejection', vi: 'promise bị reject' } },
      { kana: 'デバッグログ', romaji: 'debaggu rogu', meaning: { en: 'debug log', vi: 'log debug' } },
      { kana: 'さいげんてじゅん', kanji: '再現手順', romaji: 'saigen tejun', meaning: { en: 'reproduction steps', vi: 'các bước tái hiện' } },
    ],
    grammar: [
      {
        pattern: 'V（た形）ところ',
        title: { en: 'After trying, found that', vi: 'Sau khi thử thì phát hiện' },
        explanation: {
          en: 'Use this pattern to connect debugging action and discovered root cause.',
          vi: 'Dùng mẫu này để nối hành động debug với nguyên nhân tìm được.',
        },
        examples: [
          {
            jp: 'コンソールログを確認したところ、Promise拒否が発生していました。',
            romaji: 'Konsōru rogu o kakunin shita tokoro, Promise kyohi ga hassei shite imashita.',
            meaning: {
              en: 'After checking console logs, we found a promise rejection had occurred.',
              vi: 'Sau khi kiểm tra console log, chúng tôi phát hiện có promise rejection.',
            },
          },
          {
            jp: '再現手順を試したところ、null値参照が原因だと分かりました。',
            romaji: 'Saigen tejun o tameshita tokoro, null chi sanshō ga gen-in da to wakarimashita.',
            meaning: {
              en: 'After trying reproduction steps, we found null reference was the cause.',
              vi: 'Sau khi thử các bước tái hiện, chúng tôi phát hiện truy cập null là nguyên nhân.',
            },
          },
        ],
      },
      {
        pattern: 'N によって',
        title: { en: 'Depending on / due to', vi: 'Tùy theo / do' },
        explanation: {
          en: 'Useful for describing environment-dependent JavaScript bugs.',
          vi: 'Hữu ích để mô tả lỗi JavaScript phụ thuộc môi trường chạy.',
        },
        examples: [
          {
            jp: 'ブラウザによって、同じコードでも例外の内容が異なります。',
            romaji: 'Burauza ni yotte, onaji kōdo demo reigai no naiyō ga kotonarimasu.',
            meaning: {
              en: 'Depending on the browser, exception details differ even for the same code.',
              vi: 'Tùy trình duyệt, chi tiết ngoại lệ khác nhau dù cùng một đoạn code.',
            },
          },
          {
            jp: '実行順序によって、変数スコープの問題が表面化します。',
            romaji: 'Jikkō junjo ni yotte, hensū sukōpu no mondai ga hyōmenka shimasu.',
            meaning: {
              en: 'Depending on execution order, variable scope issues become visible.',
              vi: 'Tùy theo thứ tự thực thi, vấn đề phạm vi biến sẽ lộ ra.',
            },
          },
        ],
      },
    ],
  },
]
