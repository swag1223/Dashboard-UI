import { TOGGLE_SIDEBAR } from '@constants/actionTypes';

/**
 * Returns an action object to toggle sidebar
 * @returns {Object} An action object to be dispatched to the store.
 */
const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});

export default toggleSidebar;
