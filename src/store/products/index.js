import { PRODUCTS } from '@constants/actions';

const initialState = {
  productsData: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS.LOAD:
      return {
        ...state,
        productsData: payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
