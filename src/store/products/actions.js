import { PRODUCTS } from '@constants/actionConstants';

export const requestProducts = (products) => ({
  type: PRODUCTS.LOAD,
  payload: products,
});

export default requestProducts;
