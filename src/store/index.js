import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers } from 'redux';

import searchResultsReducer from './searchResults';

const allReducer = combineReducers({ searchResults: searchResultsReducer });

const store = createStore(allReducer, composeWithDevTools());

export default store;
