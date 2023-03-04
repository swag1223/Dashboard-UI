import { Box } from '@mui/material';
import React from 'react';

function FontIcon({ name }) {
  return (
    <Box
      className={name}
      sx={{
        fontSize: 20
      }}
    />
  );
}

export default FontIcon;
