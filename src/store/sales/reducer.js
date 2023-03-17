import { LOAD_SALES_DATA } from '@constants/actionTypes';

const initialState = {
  salesData: {},
};

const salesDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_SALES_DATA:
      return {
        ...state,
        salesData: payload,
      };
    default:
      return state;
  }
};

export default salesDataReducer;
