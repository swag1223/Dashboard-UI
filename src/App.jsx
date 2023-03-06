import MainContent from '@containers/mainContent/MainContent';
import '@styles/main.scss';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import URL from '@constants/routesConstants';
import Navbar from '@containers/navbar/Navbar';
import Error500Page from '@containers/error500/Error500Page';
import Error404Page from '@containers/error404/Error404Page';
import finalTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={finalTheme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path={URL.DASHBOARD} element={<MainContent />} />
        <Route path={URL.AUTH} element={<Error500Page />} />
        <Route path={URL.NOT_FOUND} element={<Error404Page />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
