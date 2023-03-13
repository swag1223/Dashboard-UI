import PRODUCTS from '@constants/actions';
import products from '@mockData/products.json';

export const requestProducts = (input) => {
  const productsMock = products;
  const searchResult = input
    ? productsMock.filter((product) =>
        product.label.toLowerCase().includes(input.toLowerCase())
      )
    : [];

  return {
    type: PRODUCTS.LOAD,
    payload: searchResult,
  };
};

export default requestProducts;
