import { composeWithDevTools } from 'redux-devtools-extension';
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './products';

const allReducer = combineReducers({ products: productsReducer });

const store = createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
