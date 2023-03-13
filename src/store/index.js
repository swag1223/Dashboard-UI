import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers } from 'redux';

import sideBarReducer from './sidebar';
import searchResultsReducer from './searchResults';

const allReducer = combineReducers({
  searchResults: searchResultsReducer,
  sidebar: sideBarReducer,
});

const store = createStore(allReducer, composeWithDevTools());

export default store;
