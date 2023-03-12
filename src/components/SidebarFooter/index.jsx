import FontIcon from '@components/FontIcon/style';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarFooter = ({ iconName, to }) => {
  return (
    <IconButton component={Link} to={to}>
      <FontIcon className={`icon-${iconName}`} size={20} fontcolor='dark' />
    </IconButton>
  );
};

export default SidebarFooter;
