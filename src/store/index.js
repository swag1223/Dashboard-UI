import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers } from 'redux';

import { searchResultsReducer } from './searchResults';
import { userDataReducer } from './userData';
import { sideBarReducer } from './sidebar';
import { salesDataReducer } from './sales';
import { customersDataReducer } from './customers';
import { topProductsReducer } from './topProducts';
import { transactionsReducer } from './transactions';

const allReducer = combineReducers({
  searchResults: searchResultsReducer,
  userData: userDataReducer,
  sidebar: sideBarReducer,
  salesData: salesDataReducer,
  customersData: customersDataReducer,
  topProductsData: topProductsReducer,
  transactionsData: transactionsReducer,
});

const store = createStore(allReducer, composeWithDevTools());

export default store;
