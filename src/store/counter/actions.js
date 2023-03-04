import COUNTER from '@constants/actionConstants';

export const incrementCounter = (payload) => {
  return {
    type: COUNTER.INCERMENT,
    payload
  };
};

export const decrementCounter = (payload) => {
  return {
    type: COUNTER.DECREMENT,
    payload
  };
};
