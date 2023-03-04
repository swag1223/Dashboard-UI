import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import URL from '@constants/routesConstants';
import FontIcon from '@components/fontIcon/FontIcon';

function Navbar() {
  return (
    <Box backgroundColor="PapayaWhip">
      <Typography variant="h3">Navbar</Typography>
      <Link className="links" to={URL.NOT_FOUND}>
        <FontIcon />
      </Link>
      <Link className="links" to={URL.DASHBOARD}>
        Overview
      </Link>
      <Link className="links" to={URL.NOT_FOUND}>
        Tile2
      </Link>
      <Link className="links" to={URL.AUTH}>
        Authentication
      </Link>
    </Box>
  );
}

export default Navbar;
