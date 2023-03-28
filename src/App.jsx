import { useMemo } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';

import store from '@store';
import theme from '@theme';
import router from '@routes/routerconfig';
import '@styles/main.scss';
import IsMobileContext from './context';

const App = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const value = useMemo(() => ({ isMobile, isTablet }), [isMobile, isTablet]);

  return (
    <Provider store={store}>
      <IsMobileContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </IsMobileContext.Provider>
    </Provider>
  );
};

export default App;
