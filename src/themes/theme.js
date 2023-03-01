import { createTheme } from '@mui/material';
import InterRegular from '@assets/fonts/Inter/Inter-Regular.woff';
// import icons from './icons';
import InterBold from '@assets/fonts/Inter/Inter-Bold.woff';
// import * as Inter from '@assets/fonts/Inter';

const htmlFontSize = 16; // htmlFontSize is required to be a number
const pxToRem = (size) => `${size / htmlFontSize}rem`;
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

const regularFont = {
  fontFamily: 'Inter',
  fontWeight: 400,
  src: `url(${InterRegular}) format('woff')`,
  fontStyle: 'normal'
};

const boldFont = {
  fontFamily: 'Inter',
  fontWeight: 700,
  src: `url(${InterBold}) format('woff')`,
  fontStyle: 'normal'
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
      main: Colors.green[500],
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

    // text: {
    //   primary: Colors.gray[900],
    //   secondary: Colors.gray[500],
    //   disabled: Colors.gray[400]
    // },

    action: {
      active: Colors.green[500],
      hover: Colors.green[500]
    }
  },

  shape: {
    borderRadius: 12
  },

  typography: {
    fontFamily: 'Inter',
    htmlFontSize,
    pxToRem,
    h1: {
      fontWeight: 700,
      fontSize: pxToRem(30),
      lineHeight: pxToRem(45),
      color: Colors.gray[900]
    },

    subtitle1: {
      fontWeight: 700,
      fontSize: pxToRem(20),
      lineHeight: pxToRem(30),
      color: Colors.gray[900]
    },

    subtitle2: {
      fontWeight: 600,
      fontSize: pxToRem(20),
      lineHeight: pxToRem(30),
      color: Colors.gray[900]
    },

    body1: {
      fontWeight: 600,
      fontSize: pxToRem(16),
      lineHeight: pxToRem(24),
      color: Colors.gray[900]
    },

    body2: {
      fontWeight: 400,
      fontSize: pxToRem(12),
      lineHeight: pxToRem(18),
      color: Colors.gray[500]
    },

    customBody: {
      fontWeight: 400,
      fontSize: pxToRem(16),
      lineHeight: pxToRem(24),
      color: Colors.gray[500]
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [boldFont, regularFont]
      }
      // styleOverrides: {
      //   icons
      // }
    }
  }
});

export default theme;
