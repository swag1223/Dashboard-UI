import { legacy_createStore as createStore } from 'redux';
import CounterReducer from './counter';

const store = createStore(CounterReducer);

export default store;
