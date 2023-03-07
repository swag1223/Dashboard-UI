import router from './router.config';
import store from './store';
import finalTheme from './theme';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import '@styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={finalTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
