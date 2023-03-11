import { SIDEBAR } from '@constants/actions';

const initialState = {
  isSidebarVisible: false,
};

const sideBarReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SIDEBAR.TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarVisible: !state.isSidebarVisible,
      };
    default:
      return state;
  }
};

export default sideBarReducer;
