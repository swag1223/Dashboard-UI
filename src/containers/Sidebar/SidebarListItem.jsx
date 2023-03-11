import FontIcon from '@components/FontIcon/style';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarListItem = ({ title, iconName, to }) => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <FontIcon className={`icon-${iconName}`} size={20} fontcolor='dark' />
      </ListItemIcon>
      <NavLink to={to}>
        {({ isActive }) => (
          <ListItemText
            primary={title}
            sx={{ color: isActive ? 'green' : 'black' }}
          />
        )}
      </NavLink>
    </ListItemButton>
  );
};

export default SidebarListItem;
