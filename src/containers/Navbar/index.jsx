import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import FontIcon from '@components/FontIcon/FontIcon';
import URL from '@constants/routes';

const Navbar = () => {
  return (
    <Box
      backgroundColor='PapayaWhip'
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: 20,
        alignItems: 'center',
      }}>
      <Typography variant='h1' color='text.tertiary'>
        Navbar
      </Typography>
      <Link to={URL.NOT_FOUND} className='links'>
        <FontIcon />
      </Link>
      <Link to={URL.DASHBOARD} className='links'>
        Overview
      </Link>
      <Link to={URL.NOT_FOUND} className='links'>
        Tile2
      </Link>
      <Link to={URL.AUTH} className='links'>
        Authentication
      </Link>
    </Box>
  );
};

export default Navbar;
