import { LOAD_CUSTOMERS_DATA } from '@constants/actionTypes';

const initialState = {
  customersData: [],
};

/**

@function customersDataReducer
@description Reducer function for managing state related to customersData.
@param {State} state - The current state
@param {Action} action - The action object
@returns {State} The new state
*/

const customersDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_CUSTOMERS_DATA:
      return {
        ...state,
        customersData: payload,
      };
    default:
      return state;
  }
};

export default customersDataReducer;
