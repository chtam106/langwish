import type { SxProps, Theme } from '@mui/material';
import { Typography } from '@mui/material';

type HintTextProps = {
  children: string;
  sx?: SxProps<Theme>;
};

export function HintText({ children, sx }: HintTextProps) {
  const sxOverrides = Array.isArray(sx) ? sx : [sx];

  return (
    <Typography variant="body2" color="primary.main" sx={[{ fontWeight: 500 }, ...sxOverrides]}>
      {`* ${children}`}
    </Typography>
  );
}
