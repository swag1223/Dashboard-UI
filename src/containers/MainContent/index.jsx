import { Box, useMediaQuery, useTheme } from '@mui/material';

import Gallery from '@components/Gallery';
import Sales from '@containers/Sales';
import Footer from '@containers/Footer';
import LatestCustomers from '@containers/LatestCustomers';
import TopProducts from '@containers/TopProducts';

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
      <Footer />
    </StyledMainContentContainer>
  );
};

export default MainContent;
