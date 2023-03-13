import { Autocomplete, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';

import FontIcon from '@components/styledComponents/FontIcon';
import StyledTextField from './style';

const SearchBar = (props) => {
  const {
    inputValue,
    searchResults,
    renderOption,
    onInputChange,
    placeholder,
    iconName,
    iconColor,
  } = props;

  return (
    <Autocomplete
      inputValue={inputValue}
      onInputChange={(e, newValue, reason) => {
        return onInputChange(e, newValue, reason);
      }}
      freeSolo
      options={searchResults}
      renderOption={(props, option) => {
        return renderOption(props, option);
      }}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position='start'>
                <FontIcon
                  className={`icon-${iconName}`}
                  size={20}
                  fontcolor={iconColor}
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
  inputValue: PropTypes.string.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string,
      description: PropTypes.string,
      sales: PropTypes.number,
    })
  ).isRequired,
  renderOption: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string.isRequired,
};

// the default values for props:
SearchBar.defaultProps = {
  placeholder: 'Search',
  iconName: 'search',
};
export default SearchBar;
