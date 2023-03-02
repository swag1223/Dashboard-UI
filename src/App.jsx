import Error404Page from '@containers/Error404Page';
import Error500Page from '@containers/Error500Page';
import MainContent from '@containers/MainContent';
import Navbar from '@containers/Navbar';
import '@styles/App.scss';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import finalTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={finalTheme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/auth" element={<Error500Page />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
