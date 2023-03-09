import productsReducer from './products';
import sideBarReducer from './sidebar';

import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const allReducer = combineReducers({
  products: productsReducer,
  sidebar: sideBarReducer,
});

const store = createStore(allReducer, composeWithDevTools());

export default store;
