import FontIcon from '@components/FontIcon/style';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarFooter = ({ iconName, to, onClick }) => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const isActive = currentRoute === to;
  return (
    <IconButton component={Link} to={to} onClick={onClick}>
      <FontIcon
        className={`icon-${iconName}`}
        size={20}
        variant={isActive ? 'primary' : 'secondary'}
        fontcolor='dark'
      />
    </IconButton>
  );
};

export default SidebarFooter;
