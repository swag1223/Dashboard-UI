import { useContext } from 'react';
import { Box, useTheme } from '@mui/material';

import Gallery from '@components/Gallery';
import Sales from '@containers/Sales';
import LatestCustomers from '@containers/LatestCustomers';
import TopProducts from '@containers/TopProducts';
import Transactions from '@containers/Transactions';
import Footer from '@containers/Footer';
import IsMobileContext from '@context/index';

import StyledMainContentContainer from './style';

const MainContent = () => {
  const theme = useTheme();
  const value = useContext(IsMobileContext);

  const { isTablet } = value;
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
          flexDirection: isTablet ? 'column' : 'row',
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
