import { createTheme } from '@mui/material';
import { COLORS, FONT_WEIGHTS } from '@constants/themeConstants';
import fonts from './font';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920
    }
  },

  palette: {
    primary: {
      main: COLORS.GREEN[500],
      light: COLORS.GREEN[100],
      dark: COLORS.GREEN[800]
    },

    secondary: {
      main: COLORS.GRAY[500],
      light: COLORS.GRAY[400],
      dark: COLORS.GRAY[900]
    },

    error: {
      main: COLORS.RED[200],
      contrastText: COLORS.RED[800]
    },

    info: {
      main: COLORS.BLUE[100],
      contrastText: COLORS.BLUE[800]
    },

    text: {
      primary: COLORS.GRAY[900],
      secondary: COLORS.GRAY[500],
      disabled: COLORS.GRAY[400]
    },

    action: {
      active: COLORS.GREEN[500],
      hover: COLORS.GREEN[500]
    }
  },

  shape: {
    borderRadius: 16
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: { fonts }
    }
  }
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
        lineHeight: theme.typography.pxToRem(62.4)
      }
    },

    h2: {
      fontWeight: FONT_WEIGHTS.BOLD,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: theme.typography.pxToRem(30)
    },

    h3: {
      fontWeight: FONT_WEIGHTS.SEMIBOLD,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: theme.typography.pxToRem(30)
    },

    h4: {
      fontWeight: FONT_WEIGHTS.SEMIBOLD,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(24)
    },

    body1: {
      fontWeight: FONT_WEIGHTS.REGULAR,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(24)
    },

    body2: {
      fontWeight: FONT_WEIGHTS.REGULAR,
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(18)
    }
  }
});

export default finalTheme;
