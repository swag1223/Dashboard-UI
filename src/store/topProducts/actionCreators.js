import { LOAD_TOP_PRODUCTS_DATA } from '@constants/actionTypes';
import products from '@mockData/products';

/**
 * Returns an action object to request TOP PRODUCTS DATA from the products' mock data,
 * @returns {Object} An action object to be dispatched to the store.
 */
const requestTopProductsData = () => {
  return {
    type: LOAD_TOP_PRODUCTS_DATA,
    payload: products,
  };
};

export default requestTopProductsData;
