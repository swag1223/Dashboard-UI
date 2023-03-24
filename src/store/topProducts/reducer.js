import { LOAD_TOP_PRODUCTS_DATA } from '@constants/actionTypes';

const initialState = {
  topProductsData: [],
};

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
