import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider, CssBaseline } from '@mui/material';

import { ViewportContextProvider } from '@context/index';
import store from '@store';
import theme from '@theme';
import router from '@routes/routerconfig';
import '@styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ViewportContextProvider>
          <RouterProvider router={router} />
        </ViewportContextProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
