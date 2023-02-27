import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Typography } from '@mui/material';

import theme from './themes/theme';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Typography varient="h1" color="secondary.light">
          React Assignment
        </Typography>
        <Typography varient="h2" color="text">
          FONT TESTING
        </Typography>
        {/* <Button variant="text">Text</Button> */}
        {/* <Button variant="contained">Contained</Button> */}
        {/* <Button variant="outlined">Outlined</Button> */}
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
