import Sales from '@containers/Sales';
import Footer from '@containers/Footer';
import Gallery from '@components/Gallery';

import { useDispatch, useSelector } from 'react-redux';
import { requestSalesData } from '@store/sales';
import { useEffect } from 'react';
import LatestCustomers from '@containers/LatestCustomers';
import TopProducts from '@containers/TopProducts';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import StyledMainContentContainer from './style';

const MainContent = () => {
  const { salesData } = useSelector((state) => state.salesData);
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // console.log(salesData);

  // dispatches request for sales data to plot the line chart.
  useEffect(() => {
    dispatch(requestSalesData());
  }, []);

  return (
    <StyledMainContentContainer>
      <Gallery />
      <Sales salesData={salesData} />
      <Box
        sx={{
          border: '1px solid red',
          display: 'flex',
          gap: '20px',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
          // maxHeight: '500px',
        }}>
        <LatestCustomers />
        <TopProducts />
      </Box>
      <Footer />
    </StyledMainContentContainer>
  );
};

export default MainContent;
