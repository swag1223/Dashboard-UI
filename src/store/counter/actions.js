import COUNTER from '@constants/actions';

export const incrementCounter = (payload) => {
  return {
    type: COUNTER.INCREMENT,
    payload,
  };
};

export const decrementCounter = (payload) => {
  return {
    type: COUNTER.DECREMENT,
    payload,
  };
};
