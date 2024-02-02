import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography, useTheme } from '@mui/material';

import FontIcon from '@components/styledComponents/FontIcon';
import Graph from '@components/Graph';
import { requestSalesData } from '@store/sales';
import { dateFormatter, sortData } from '@utils/index';

import { StyledSalesContainer, StyledSalesHeading } from './style';

/**
 * appends 'K' as unit at the end of the value
 */
const salesUnitFormatter = (tick) => {
  return `${tick} K`;
};

const Sales = () => {
  // HOOKS
  const dispatch = useDispatch();
  const { salesData } = useSelector((state) => state.salesData);
  const theme = useTheme();
  const {
    palette: {
      common: { GRAY },
    },
  } = theme;

  const sortedData = sortData(salesData);

  /**
   * dispacthes action of requesting sales data
   */
  useEffect(() => {
    dispatch(requestSalesData());
  }, []);

  return (
    <StyledSalesContainer>
      <StyledSalesHeading>
        <Typography variant='h4'>Sales</Typography>
        <FontIcon
          className='icon-exclamation-circle'
          size={18}
          fontcolor={GRAY[500]}
        />
      </StyledSalesHeading>
      <Box width='100%'>
        <Graph
          data={sortedData}
          xAxisDataKey='datetime'
          valueToPlot='sales'
          xAxisTickFormatter={dateFormatter}
          yAxisTickFormatter={salesUnitFormatter}
        />
      </Box>
    </StyledSalesContainer>
  );
};

export default Sales;
