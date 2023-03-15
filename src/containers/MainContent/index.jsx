import { Box } from '@mui/material';

import Footer from '@containers/Footer';

const MainContent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Main Overview</h1>
      <Box sx={{ wordBreak: 'break-all' }} />
      <Footer />
    </Box>
  );
};

export default MainContent;
