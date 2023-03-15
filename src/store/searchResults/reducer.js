import { LOAD_PRODUCTS_SEARCH_RESULTS } from '@constants/actionTypes';

const initialState = {
  searchResults: [],
};

/**
 * Reducer function that manages the state of search results in the Redux store.
 * @param {Object} state - The current state of the search results.
 * @param {Object} action - The action object to be processed by the reducer.
 * @param {string} action.type - The type of the action being dispatched.
 * @param {any} action.payload - The data to be used to update the state.
 * @returns {Object} The updated state of the search results.
 */
const searchResultsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PRODUCTS_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: payload,
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
