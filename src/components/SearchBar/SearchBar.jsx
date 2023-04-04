import { InputAdornment, useTheme } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import PropTypes from 'prop-types';

import FontIcon from '@components/styledComponents/FontIcon';

import { StyledTextField } from './style';

const SearchBar = (props) => {
  const { ...restProps } = props;
  const theme = useTheme();
  const {
    palette: {
      common: { GRAY },
    },
  } = theme;

  return (
    <Autocomplete
      {...restProps}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          placeholder='Search'
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position='start'>
                <FontIcon
                  className='icon-search'
                  size={20}
                  fontcolor={GRAY[500]}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

SearchBar.propTypes = {
  ...Autocomplete.propTypes,
  renderInput: PropTypes.func,
};

SearchBar.defaultProps = {
  renderInput: () => {},
};

export default SearchBar;
