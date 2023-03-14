/**
 *debounce function delays invoking the provided function until after 'delay' milliseconds have elapsed since the last time it was invoked.
 *@param {Function} func - The function to be debounced.
 *@param {number} delay - The number of milliseconds to delay.
 *@returns {Function} Returns the new debounced function.
 */
const debounce = (func, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;
