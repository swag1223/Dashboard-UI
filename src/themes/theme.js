import { createTheme } from '@mui/material';
// import InterRegular from '@assets/fonts/Inter/Inter-Regular.woff';
import Colors from './colors';
import font from './font';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
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

  typography: {
    fontFamily: 'Inter'
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: font
      // styleOverrides: `@font-face { font-family: 'Inter'; font-weight: 400; src: url(${InterRegular}) format('woff');}`
    }
  }
});

export default theme;
