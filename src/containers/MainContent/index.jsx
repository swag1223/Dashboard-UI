import Footer from '@containers/Footer';
import Gallery from '@components/Gallery';
import Sales from '@components/Sales';
import { useDispatch, useSelector } from 'react-redux';
import { requestSalesData } from '@store/sales';
import { useEffect } from 'react';
import StyledMainContentContainer from './style';

const MainContent = () => {
  const { salesData } = useSelector((state) => state.salesData);
  const dispatch = useDispatch();

  // console.log(salesData);

  // dispatches request for sales data to plot the line chart.
  useEffect(() => {
    dispatch(requestSalesData());
  }, []);

  return (
    <StyledMainContentContainer>
      <Gallery />
      <Sales salesData={salesData} />
      <Footer />
    </StyledMainContentContainer>
  );
};

export default MainContent;
