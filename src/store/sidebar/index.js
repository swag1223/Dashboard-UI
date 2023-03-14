import { TOGGLE_SIDEBAR } from '@constants/actionTypes';

const initialState = {
  isSidebarVisible: false,
};

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
