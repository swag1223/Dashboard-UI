import { LOAD_CUSTOMERS_DATA } from '@constants/actionTypes';
import customersData from '@mockData/customers.json';

const requestCustomersData = () => {
  return {
    type: LOAD_CUSTOMERS_DATA,
    payload: customersData,
  };
};

export default requestCustomersData;
