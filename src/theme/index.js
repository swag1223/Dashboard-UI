import { createTheme } from '@mui/material';

import { COLORS, FONT_WEIGHTS } from '@constants/theme';
import fonts from './font';
import ellipsis from './mixins';

const { GRAY, RED, GREEN, BLUE } = COLORS;
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: GREEN[500],
      light: GREEN[100],
      dark: GREEN[800],
    },
    secondary: {
      main: GRAY[500],
      light: GRAY[400],
      dark: GRAY[900],
      extraLight: GRAY[50],
      border: GRAY[200],
    },
    error: {
      main: RED[200],
      contrastText: RED[800],
    },
    info: {
      main: BLUE[100],
      contrastText: BLUE[800],
    },
    text: {
      primary: GRAY[900],
      secondary: GRAY[500],
      tertiary: GRAY[400],
    },
    actions: {
      active: GREEN[500],
    },
    common: COLORS,
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { fonts },
    },
  },
});

const finalTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontWeight: FONT_WEIGHTS.BOLD,
      fontSize: theme.typography.pxToRem(30),
      lineHeight: theme.typography.pxToRem(45),
      [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.pxToRem(48),
        lineHeight: theme.typography.pxToRem(62.4),
      },
    },
    h2: {
      fontWeight: FONT_WEIGHTS.BOLD,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: theme.typography.pxToRem(30),
    },

    h3: {
      fontWeight: FONT_WEIGHTS.SEMIBOLD,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: theme.typography.pxToRem(30),
    },

    h4: {
      fontWeight: FONT_WEIGHTS.SEMIBOLD,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(24),
    },
    body1: {
      fontWeight: FONT_WEIGHTS.REGULAR,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(24),
    },
    body2: {
      fontWeight: FONT_WEIGHTS.REGULAR,
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(18),
    },
  },
  mixins: {
    ellipsis,
  },
  zIndex: {
    appBar: 1201,
  },
});

export default finalTheme;
