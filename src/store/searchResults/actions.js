import SEARCH_RESULTS from '@constants/actions';
import products from '@mockData/products.json';

/**
 * Returns an action object to request SEARCH RESULTS from the products' mock data,
 * filtered by the given input (if provided).
 * @param {string} input - The search string to filter products by (optional).
 * @returns {Object} An action object to be dispatched to the store.
 */
const requestSearchResults = (input) => {
  const productsMock = products;
  const searchResult = input
    ? productsMock.filter((product) =>
        product.label.toLowerCase().includes(input.toLowerCase())
      )
    : [];

  return {
    type: SEARCH_RESULTS.LOAD,
    payload: searchResult,
  };
};

export default requestSearchResults;
