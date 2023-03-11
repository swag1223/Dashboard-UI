import { PRODUCTS } from '@constants/actions';
import products from '@mockData/products.json';

const productLoader = (result) => {
  return {
    type: PRODUCTS.LOAD,
    payload: result,
  };
};

export const requestProducts = (input) => (dispatch) => {
  const productsMock = products;
  const result = input
    ? productsMock.filter((product) =>
        product.label.toLowerCase().includes(input.toLowerCase())
      )
    : [];
  dispatch(productLoader(result));
};

export default requestProducts;
