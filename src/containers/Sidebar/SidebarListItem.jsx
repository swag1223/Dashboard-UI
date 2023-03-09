import FontIcon from '@components/FontIcon/FontIcon';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarListItem = ({ title, iconName, to }) => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <FontIcon className={`icon-${iconName}`} size={20} fontcolor='dark' />
      </ListItemIcon>
      <Link to={to}>
        <ListItemText primary={title} />
      </Link>
    </ListItemButton>
  );
};

export default SidebarListItem;
