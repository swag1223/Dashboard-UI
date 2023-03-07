import COUNTER from '@constants/actionConstants';

const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNTER.INCERMENT:
      return { ...state, count: state.count + payload };
    case COUNTER.DECREMENT:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

export default CounterReducer;
