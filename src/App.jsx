import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Typography } from '@mui/material';

import theme from '@themes/theme';
// import '@/styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Error404Page from './containers/Error404Page';
import Error500Page from './containers/Error500Page';
import MainContent from './containers/MainContent';
import Navbar from './containers/Navbar';
import Sidebar from './containers/Sidebar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Typography varient="h1" color="secondary.light">
          React Assignment
        </Typography>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          {/* <Route index path="/overview" element={<MainContent />} /> */}
          <Route path="/auth" element={<Error500Page />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </>
    </ThemeProvider>
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <div className="App">
    //     <Typography varient="h1" color="secondary.light">
    //       React Assignment
    //     </Typography>
    //     <Typography varient="h2" color="text">
    //       FONT TESTING
    //     </Typography>
    //     {/* <Button variant="text">Text</Button> */}
    //     {/* <Button variant="contained">Contained</Button> */}
    //     {/* <Button variant="outlined">Outlined</Button> */}
    //     {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    //   </div>
    // </ThemeProvider>
  );
}

export default App;
