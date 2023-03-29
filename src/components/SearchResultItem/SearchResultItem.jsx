import { Box, Typography } from '@mui/material';

import PropTypes from 'prop-types';

import StyledSearchResultItem from './style';

const SearchResultItem = (props) => {
  const { option } = props;

  return (
    <StyledSearchResultItem key={option.id} {...props}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Typography variant='h4'>{option.label}</Typography>
        <Typography variant='body3'>{option.description}</Typography>
      </Box>
      <Typography variant='body1'>{option.sales} sales</Typography>
    </StyledSearchResultItem>
  );
};

const optionPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  sales: PropTypes.number,
});

SearchResultItem.propTypes = {
  option: optionPropTypes.isRequired,
};

export default SearchResultItem;
