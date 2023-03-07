import FontIcon from '@components/FontIcon/FontIcon';
import URL from '@constants/routesConstants';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box backgroundColor='PapayaWhip'>
      <Typography variant='h3' color='text.tertiary'>
        Navbar BAR
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
