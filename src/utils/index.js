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

/**
 *@description Formats datetimestamp as a date string.
 *@param {string} datetimestamp - The datetimestamp value to format as a date string.
 *@returns {string} A string in the format "DD MMM YYYY".
 */
const dateFormatter = (datetimestamp) => {
  const datetime = new Date(datetimestamp);
  const date = datetime.getDate().toString().padStart(2, '0');
  const month = datetime.toLocaleString('default', { month: 'short' });
  const year = datetime.getFullYear();

  return `${date} ${month} ${year}`;
};

export { debounce, dateFormatter };
