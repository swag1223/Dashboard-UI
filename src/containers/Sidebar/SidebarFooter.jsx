import FontIcon from '@components/FontIcon/style';
import { ListItemIcon } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarFooter = ({ iconName, to }) => {
  return (
    <Link to={to}>
      <ListItemIcon>
        <FontIcon className={`icon-${iconName}`} size={20} fontcolor='dark' />
      </ListItemIcon>
    </Link>
  );
};

export default SidebarFooter;
