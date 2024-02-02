import { TOGGLE_SIDEBAR } from '@constants/actionTypes';

const initialState = {
  // Whether the sidebar is currently visible.
  isSidebarVisible: false,
};

/**
 * Redux reducer for sidebar visibility.
 * @returns {State} The new state of the reducer.
 */

const sideBarReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarVisible: !state.isSidebarVisible,
      };
    default:
      return state;
  }
};

export default sideBarReducer;
