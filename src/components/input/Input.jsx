import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography } from '@mui/material';

// const debounce = (f, delay) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       f(...args);
//     }, delay);
//   };
// };

export default function Input({ getProducts, productsData, inputSx = {} }) {
  // const [value, setValue] = React.useState(options[0]);
  // const [inputValue, setInputValue] = React.useState('');
  // const handleInputChange = (value) => {
  //   setInputValue(value);
  // };

  // const debouncedHandleInputChange = debounce(handleInputChange, 1000);

  // const filterOptions = productsData.filter((product) =>
  //   product.label.toLowerCase().includes(inputValue.toLowerCase())
  // );
  // console.log(filterOptions);

  return (
    <Autocomplete
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      // inputValue={inputValue}
      // onInputChange={(event, newInputValue) => {
      //   // setInputValue(newInputValue);
      //   debouncedHandleInputChange(newInputValue);
      // }}
      // id="controllable-states-demo"

      freeSolo
      onFocus={getProducts}
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
        <TextField
          {...params}
          placeholder="Search"
          sx={inputSx}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <FontIcon name="icon-menu" />
          //     </InputAdornment>
          //   )
          // }}
        />
      )}
    />
  );
}
