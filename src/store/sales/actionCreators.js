import { LOAD_SALES_DATA } from '@constants/actionTypes';
import salesData from '@mockData/sales.json';

const requestSalesData = () => {
  return {
    type: LOAD_SALES_DATA,
    payload: salesData,
  };
};

export default requestSalesData;
