import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import router from '@routes/routerconfig';
import store from '@store';
import finalTheme from '@theme';
import { Provider } from 'react-redux';
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
