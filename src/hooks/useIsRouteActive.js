import { useLocation } from 'react-router-dom';

/**
 * Returns a boolean indicating whether the current route matches a given path.
 * @param {string} to - The path to compare to the current route.
 * @returns {boolean} True if the current route matches the given path,
 * false otherwise , indicating if current route is active or not
 */
const useIsRouteActive = (to) => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const isActive = currentRoute === to;

  return isActive;
};

export default useIsRouteActive;
