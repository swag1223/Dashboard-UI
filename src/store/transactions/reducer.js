import { LOAD_TRANSACTIONS_DATA } from '@constants/actionTypes';

const initialState = {
  transactionsData: {},
};

/**

@function transactionsReducer
@description Reducer function for managing state related to transactionsData.
@param {State} state - The current state
@param {Action} action - The action object
@returns {State} The new state
*/
const transactionsReducer = (state = initialState, action) => {
  const { type, payload } = action;
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
