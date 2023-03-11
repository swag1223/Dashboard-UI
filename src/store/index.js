import { composeWithDevTools } from 'redux-devtools-extension';
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './products';
import sideBarReducer from './sidebar';

const allReducer = combineReducers({
  products: productsReducer,
  sidebar: sideBarReducer,
});

const store = createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
