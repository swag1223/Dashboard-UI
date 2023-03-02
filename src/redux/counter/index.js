const initialState = {
  count: 0
};

const CounterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'increment':
      return { ...state, count: state.count + payload };
    case 'decrement':
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

export default CounterReducer;
