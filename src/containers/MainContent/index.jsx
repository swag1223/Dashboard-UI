import { Box } from '@mui/material';

import Footer from '../Footer';

const MainContent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Main Overview</h1>
      <Footer />
    </Box>
  );
};

export default MainContent;
