import PRODUCTS from '@constants/actions';
import products from '@mockData/products.json';

export const requestProducts = (input) => (dispatch) => {
  const productsMock = products;
  const result = input
    ? productsMock.filter((product) =>
        product.label.toLowerCase().includes(input.toLowerCase())
      )
    : [];

  // console.log(input);
  // console.log(result);
  dispatch({
    type: PRODUCTS.LOAD,
    payload: result,
  });
};

export default requestProducts;
