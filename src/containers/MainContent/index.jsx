import Sales from '@containers/Sales';
import Footer from '@containers/Footer';
import Gallery from '@components/Gallery';

import LatestCustomers from '@containers/LatestCustomers';
import TopProducts from '@containers/TopProducts';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import Transactions from '@containers/Transactions';
import StyledMainContentContainer from './style';

const MainContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StyledMainContentContainer>
      <Gallery />
      <Sales />
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
        }}>
        <LatestCustomers />
        <TopProducts />
      </Box>
      <Transactions />
      <Footer />
    </StyledMainContentContainer>
  );
};

export default MainContent;
