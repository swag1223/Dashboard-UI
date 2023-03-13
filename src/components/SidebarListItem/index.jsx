import FontIcon from '@components/FontIcon/style';
import { Badge, IconButton } from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { StyledSidebarListItemButton, StyledListItemText } from './style';

const SidebarListItem = ({ title, iconName, to, isBadge = false, onClick }) => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const isActive = currentRoute === to;
  return (
    <StyledSidebarListItemButton component={NavLink} to={to} onClick={onClick}>
      <FontIcon
        className={`icon-${iconName}`}
        size={20}
        variant={isActive ? 'primary' : 'secondary'}
        fontcolor='dark'
      />
      <StyledListItemText
        primary={title}
        isActive={isActive}
        // color={isActive ? 'primary.main' : 'secondary.main'}
      />

      {isBadge && (
        <IconButton disableRipple tabIndex={-1}>
          <Badge badgeContent={1} color='error' />
        </IconButton>
      )}
    </StyledSidebarListItemButton>
  );
};

export default SidebarListItem;
