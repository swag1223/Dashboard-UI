import { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography } from '@mui/material';

const debounce = (f, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      f(...args);
    }, delay);
  };
};

export default function Input({ getProducts, productsData, inputSx = {} }) {
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
        <TextField {...params} placeholder="Search" sx={inputSx} />
      )}
    />
  );
}
