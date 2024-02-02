import { LOAD_SALES_DATA } from '@constants/actionTypes';
import salesData from '@mockData/sales';

/**
 * Returns an action object to request SALES DATA from the sales' mock data,
 * @returns {Object} An action object to be dispatched to the store.
 */
const requestSalesData = () => {
  return {
    type: LOAD_SALES_DATA,
    payload: salesData,
  };
};

export default requestSalesData;
