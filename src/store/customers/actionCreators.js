import { LOAD_CUSTOMERS_DATA } from '@constants/actionTypes';
import customersData from '@mockData/customers';

/**
 * Returns an action object to request CUSTOMERS DATA from the customers' mock data,
 * @returns {Object} An action object to be dispatched to the store.
 */
const requestCustomersData = () => {
  return {
    type: LOAD_CUSTOMERS_DATA,
    payload: customersData,
  };
};

export default requestCustomersData;
