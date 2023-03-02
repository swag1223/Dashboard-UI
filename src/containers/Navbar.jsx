import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import FontIcon from '@/components/FontIcon';

function Navbar() {
  return (
    <Box backgroundColor="PapayaWhip">
      <Typography variant="h3">Navbar</Typography>
      <Link className="links" to="*">
        <FontIcon />
      </Link>
      <Link className="links" to="/">
        Overview
      </Link>
      <Link className="links" to="*">
        Tile2
      </Link>
      <Link className="links" to="/auth">
        Authentication
      </Link>
    </Box>
  );
}

export default Navbar;
