import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography, useTheme } from '@mui/material';

import FontIcon from '@components/styledComponents/FontIcon';
import Graph from '@components/Graph';
import { requestSalesData } from '@store/sales';
import { dateFormatter } from '@utils/index';
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

  /**
   * A custom comparator to sort the data on the basis on date before plotting values
   * creates a new sorted array based on the input sales data array.
   * @function
   * @param {Array<Object>} salesData - An array of sales data objects.
   * @returns {Array<Object>} A new sorted array of sales data objects.
   */
  const sortedData = [...salesData].sort(
    (a, b) => new Date(a.datetime) - new Date(b.datetime)
  );

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
