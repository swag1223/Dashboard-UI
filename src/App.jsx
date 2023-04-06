import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider, CssBaseline } from '@mui/material';

import { ViewportContextProvider } from '@context/index';

import '@styles/main.scss';
import router from '@routes/routerconfig';
import store from '@store/index';
import theme from '@theme/index';

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
