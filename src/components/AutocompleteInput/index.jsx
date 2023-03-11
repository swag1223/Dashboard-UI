import FontIcon from '@components/FontIcon/style';
import { Autocomplete, Box, InputAdornment, Typography } from '@mui/material';
import { useState, useMemo } from 'react';

import StyledTextField from './style';

const debounce = (func, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const AutocompleteInput = ({ getProducts, productsData }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    getProducts(value);
  };

  const debouncedHandleInputChange = useMemo(
    () => debounce(handleInputChange, 1000),
    []
  );

  return (
    <Autocomplete
      inputValue={inputValue}
      onInputChange={(e, newValue, reason) => {
        setInputValue(newValue);

        if (reason === 'clear') {
          handleInputChange(newValue);
        } else {
          debouncedHandleInputChange(newValue);
        }
      }}
      freeSolo
      options={productsData}
      renderOption={(props, option) => (
        // TODO: this list will be replaced by top products list component later
        <Box
          {...props}
          key={option.id}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between !important',
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Typography variant='h4'>{option.label}</Typography>
            <Typography variant='body2'>{option.description}</Typography>
          </Box>
          <Typography variant='body1'>{option.sales} sales</Typography>
        </Box>
      )}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          placeholder='Search'
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position='start'>
                <FontIcon className='icon-search' size={20} fontcolor='main' />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
export default AutocompleteInput;
