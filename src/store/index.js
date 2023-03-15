import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { searchResultsReducer } from './searchResults';
import { userDataReducer } from './userData';

import sideBarReducer from './sidebar/reducer';

const allReducer = combineReducers({
  searchResults: searchResultsReducer,
  userData: userDataReducer,
  sidebar: sideBarReducer,
});

const store = createStore(allReducer, composeWithDevTools());

export default store;
