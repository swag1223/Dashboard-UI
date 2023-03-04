import PRODUCTS from './constants';

export const requestProducts = (products) => async (dispatch) => {
  dispatch({
    type: PRODUCTS.LOAD
  });
  try {
    dispatch({
      type: PRODUCTS.LOAD_SUCCESS,
      payload: products,
      isError: false
    });
  } catch (e) {
    dispatch({
      type: PRODUCTS.LOAD_SUCCESS,
      isError: true
    });
  }
};

// const requestProducts = (payload) => {
//   return {
//     type: 'FETCH_PRODUCTS',
//     payload
//   };
// };

// dispatch();

export default requestProducts;
