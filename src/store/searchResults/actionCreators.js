import { LOAD_PRODUCTS_SEARCH_RESULTS } from '@constants/actionTypes';
import products from '@mockData/products';

/**
 * Returns an action object to request SEARCH RESULTS from the products' mock data,
 * filtered by the given input (if provided).
 * @param {string} input - The search string to filter products by (optional).
 * @returns {Object} An action object to be dispatched to the store.
 */
const requestProductsSearchResults = (input) => {
  const productsMock = products;
  const productSearchResult = input
    ? productsMock.filter((product) =>
        product.label.toLowerCase().includes(input.toLowerCase())
      )
    : [];

  return {
    type: LOAD_PRODUCTS_SEARCH_RESULTS,
    payload: productSearchResult,
  };
};

export default requestProductsSearchResults;
