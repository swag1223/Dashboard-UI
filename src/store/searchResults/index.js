import PRODUCTS from '@constants/actions';

const initialState = {
  searchResults: [],
};

const searchResultsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS.LOAD:
      return {
        ...state,
        searchResults: payload,
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
