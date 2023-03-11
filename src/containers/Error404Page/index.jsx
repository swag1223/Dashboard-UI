import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { URL } from '@constants/routes';

const Error404Page = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <h1>404 Page Not Found </h1>
      <Link className='links' to={URL.DASHBOARD}>
        Go To Home
      </Link>
    </Box>
  );
};

export default Error404Page;
