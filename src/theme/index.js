import { createTheme } from '@mui/material';
import fonts from './font';

const Colors = {
  gray: {
    400: '#9CA3AF',
    500: '#6B7280',
    900: '#111827'
  },
  red: {
    200: '#FBD5D5',
    800: '#9B1C1C'
  },
  green: {
    100: '#DEF7EC',
    500: '#0E9F6E',
    800: '#03543F'
  },
  blue: {
    100: '#E1EFFE',
    800: '#1E429F'
  }
};

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
      main: createTheme().palette.primary.main,
      light: Colors.green[100],
      dark: Colors.green[800]
    },

    secondary: {
      main: Colors.gray[500],
      light: Colors.gray[400],
      dark: Colors.gray[900]
    },

    error: {
      main: Colors.red[200],
      contrastText: Colors.red[800]
    },

    info: {
      main: Colors.blue[100],
      contrastText: Colors.blue[800]
    },

    text: {
      primary: Colors.gray[900],
      secondary: Colors.gray[500],
      disabled: Colors.gray[400]
    },

    action: {
      active: Colors.green[500],
      hover: Colors.green[500]
    }
  },

  shape: {
    borderRadius: 12
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
      fontWeight: 700,
      fontSize: theme.typography.pxToRem(30),
      lineHeight: theme.typography.pxToRem(45),
      [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.pxToRem(48),
        lineHeight: theme.typography.pxToRem(62.4)
      }
    },

    h2: {
      fontWeight: 700,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: theme.typography.pxToRem(30)
    },

    h3: {
      fontWeight: 600,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: theme.typography.pxToRem(30)
    },

    h4: {
      fontWeight: 600,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(24)
    },

    body1: {
      fontWeight: 400,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(24)
    },

    body2: {
      fontWeight: 400,
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(18)
    }
  }
});

export default finalTheme;
