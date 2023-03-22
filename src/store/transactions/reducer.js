import { LOAD_TRANSACTIONS_DATA } from '@constants/actionTypes';

const initialState = {
  transactionsData: {},
};

const transactionsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(action);
  switch (type) {
    case LOAD_TRANSACTIONS_DATA:
      return {
        ...state,
        transactionsData: payload,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
