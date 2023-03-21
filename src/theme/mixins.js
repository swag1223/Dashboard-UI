/**
 * function to truncate text with an ellipsis.
 * @param {number} lineClamp - The number of lines to show before truncating with an ellipsis.
 * @returns {Object} - A CSS style object with the necessary properties to truncate text with an ellipsis.
 */
const ellipsis = (lineClamp = 1) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box ',
  WebkitLineClamp: lineClamp,
  WebkitBoxOrient: 'vertical',
  wordBreak: 'break-all',
});

export default ellipsis;
