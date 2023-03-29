import { LOAD_TRANSACTIONS_DATA } from '@constants/actionTypes';
import TransactionsData from '@mockData/transactions';

const requestTransactionsData = () => {
  return {
    type: LOAD_TRANSACTIONS_DATA,
    payload: TransactionsData,
  };
};

export default requestTransactionsData;
