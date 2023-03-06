import { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';

import Autocomplete from '@mui/material/Autocomplete';
import { Box, InputAdornment, styled, Typography } from '@mui/material';
import FontIcon from '@components/fontIcon/FontIcon';

const StyledTextField = styled(TextField)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block'
  },

  '& .MuiInputBase-root': {
    width: theme.typography.pxToRem(402),
    boxShadow: theme.shadows[2],
    padding: `${theme.typography.pxToRem(5)} ${theme.typography.pxToRem(15)}}`
  }
}));
const debounce = (f, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      f(...args);
    }, delay);
  };
};

export default function AutocompleteInput({ getProducts, productsData }) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = () => {
    getProducts();
  };

  // const debouncedHandleInputChange = useRef(debounce(handleInputChange, 1000));
  const debouncedHandleInputChange = useMemo(
    () => debounce(handleInputChange, 1000),
    []
  );

  return (
    <Autocomplete
      inputValue={inputValue}
      onInputChange={(e) => {
        setInputValue(e.target.value);
        // debouncedHandleInputChange.current();
        debouncedHandleInputChange();
      }}
      freeSolo
      options={productsData}
      renderOption={(props, option) => (
        <Box
          {...props}
          key={option.id}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between !important'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
            <Typography variant="h4">{option.label}</Typography>
            <Typography variant="body2">{option.description}</Typography>
          </Box>
          <Typography variant="body1">{option.sales} sales</Typography>
        </Box>
      )}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          placeholder="Search"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <FontIcon className="icon-search" size={20} fontcolor="main" />
              </InputAdornment>
            )
          }}
        />
      )}
    />
  );
}
