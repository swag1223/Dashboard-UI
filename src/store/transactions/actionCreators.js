import { LOAD_TRANSACTIONS_DATA } from '@constants/actionTypes';
import transactionsData from '@mockData/transactions';

/**
 * Returns an action object to request TRANSACTIONS DATA from the transactions' mock data,
 * @returns {Object} An action object to be dispatched to the store.
 */
const requestTransactionsData = () => {
  return {
    type: LOAD_TRANSACTIONS_DATA,
    payload: transactionsData,
  };
};

export default requestTransactionsData;
