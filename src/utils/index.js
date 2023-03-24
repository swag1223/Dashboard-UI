/**
 *debounce function delays invoking the provided function until after 'delay' milliseconds have elapsed since the last time it was invoked.
 *@param {Function} func - The function to be debounced.
 *@param {number} delay - The number of milliseconds to delay.
 *@returns {Function} Returns the new debounced function.
 */
export const debounce = (func, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 *Takes a datetimestamp and returns a formatted date string.
 *Takes a datetimestamp to format and returns formatted date string in the format "DD MMM YYYY".
 */
export const dateFormatter = (tick) => {
  const datetime = new Date(tick);
  const date = datetime.getDate().toString().padStart(2, '0');
  const month = datetime.toLocaleString('default', { month: 'short' });
  const year = datetime.getFullYear();

  return `${date} ${month} ${year}`;
};
