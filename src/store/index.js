import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import CounterReducer from './counter';

const allReducer = combineReducers({ counter: CounterReducer });

const store = createStore(allReducer, composeWithDevTools());

export default store;
