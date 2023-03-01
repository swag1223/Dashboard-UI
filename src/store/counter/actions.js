export const incrementCounter = (payload) => {
  return {
    type: 'increment',
    payload
  };
};

export const decrementCounter = (payload) => {
  return {
    type: 'decrement',
    payload
  };
};
