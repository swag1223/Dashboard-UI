import PRODUCTS from '@constants/actions';

export const requestProducts = (products) => ({
  type: PRODUCTS.LOAD,
  payload: products,
});

export default requestProducts;
