import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import productsReducer from './products';

const allReducer = combineReducers({ products: productsReducer });

const store = createStore(allReducer, composeWithDevTools());

export default store;
