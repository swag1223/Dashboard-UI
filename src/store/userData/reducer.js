import { LOAD_USER_DATA } from '@constants/actionTypes';

const initialState = {
  userData: {},
};

/**
 *The reducer function handles user data state updates.
 *@param {Object} state - The current state of the user data.
 *@param {Object} action - The action object that describes the update.
 *@returns {Object} The new state of the user data.
 */
const userDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER_DATA:
      return {
        ...state,
        userData: payload,
      };
    default:
      return state;
  }
};

export default userDataReducer;
