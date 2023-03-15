import { LOAD_USER_DATA } from '@constants/actionTypes';
import user from '@mockData/user.json';

/**
 *Returns an action object to load user data.
 *@function
 *@returns {Object} - An action object with type and payload properties.
 */
const requestUserData = () => {
  return {
    type: LOAD_USER_DATA,
    payload: user,
  };
};

export default requestUserData;
