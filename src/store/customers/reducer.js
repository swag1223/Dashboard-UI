import { LOAD_CUSTOMERS_DATA } from '@constants/actionTypes';

const initialState = {
  customersData: [],
};

const customersDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_CUSTOMERS_DATA:
      return {
        ...state,
        customersData: payload,
      };
    default:
      return state;
  }
};

export default customersDataReducer;
