import MainContent from '@containers/mainContent/MainContent';
import '@styles/main.scss';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import URL from '@constants/routesConstants';
import Error500Page from '@containers/error500/Error500Page';
import Error404Page from '@containers/error404/Error404Page';
import NavBar from '@containers/MUINavbar';
import finalTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={finalTheme}>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path={URL.DASHBOARD} element={<MainContent />} />
        <Route path={URL.AUTH} element={<Error500Page />} />
        <Route path={URL.NOT_FOUND} element={<Error404Page />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
