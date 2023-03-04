import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchInput({ products, onFocus }) {
  // const [value, setValue] = React.useState(options[0]);
  // const [inputValue, setInputValue] = React.useState('');

  return (
    <Autocomplete
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      // inputValue={inputValue}
      // onInputChange={(event, newInputValue) => {
      //   setInputValue(newInputValue);
      // }}
      // id="controllable-states-demo"
      freeSolo
      onFocus={onFocus}
      options={products}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} placeholder="Search" />}
    />
  );
}
