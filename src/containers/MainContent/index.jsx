import { Box, useMediaQuery, useTheme } from '@mui/material';

import Gallery from '@components/Gallery';
import Sales from '@containers/Sales';
import LatestCustomers from '@containers/LatestCustomers';
import TopProducts from '@containers/TopProducts';
import Transactions from '@containers/Transactions';
import Footer from '@containers/Footer';

import StyledMainContentContainer from './style';

const MainContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const {
    typography: { pxToRem },
  } = theme;

  return (
    <StyledMainContentContainer>
      <Gallery />
      <Sales />
      <Box
        sx={{
          display: 'flex',
          gap: pxToRem(20),
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
