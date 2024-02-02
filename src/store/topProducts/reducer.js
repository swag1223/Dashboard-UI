import { LOAD_TOP_PRODUCTS_DATA } from '@constants/actionTypes';

const initialState = {
  topProductsData: [],
};

/**

@function topProductsReducer
@description Reducer function for managing state related to topProductsData.
@param {State} state - The current state
@param {Action} action - The action object
@returns {State} The new state
*/
const topProductsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TOP_PRODUCTS_DATA:
      return {
        ...state,
        topProductsData: payload,
      };
    default:
      return state;
  }
};

export default topProductsReducer;
