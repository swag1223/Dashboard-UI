import PRODUCTS from './constants';

const initialState = {
  productsData: [],
  isloading: false,
  isError: false
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case PRODUCTS.LOAD_SUCCESS:
      return {
        ...state,
        productsData: payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default productsReducer;
