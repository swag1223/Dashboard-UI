import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore } from 'redux';
import CounterReducer from './counter';

const store = createStore(CounterReducer, composeWithDevTools);

export default store;
