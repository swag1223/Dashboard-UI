import { LOAD_SALES_DATA } from '@constants/actionTypes';

const initialState = {
  salesData: [],
};

/**

@function salesDataReducer
@description Reducer function for managing state related to salesData.
@param {State} state - The current state
@param {Action} action - The action object
@returns {State} The new state
*/
const salesDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_SALES_DATA:
      return {
        ...state,
        salesData: payload,
      };
    default:
      return state;
  }
};

export default salesDataReducer;
