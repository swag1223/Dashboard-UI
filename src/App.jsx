import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider, CssBaseline } from '@mui/material';

import store from '@store';
import theme from '@theme';
import router from '@routes/routerconfig';
import '@styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;