import FontIcon from '@components/FontIcon/style';
import { Badge, IconButton, ListItemText } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

import StyledSidebarListItem from './style';

const SidebarListItem = ({ title, iconName, to, isBadge = false }) => {
  return (
    <StyledSidebarListItem component={NavLink} to={to}>
      {/* {({ isActive }) => {
        console.log('am active');
        return (
          <>
            <FontIcon
              className={`icon-${iconName}`}
              size={20}
              fontcolor={isActive ? 'light' : 'dark'}
            />
            <ListItemText
              primary={title}
              color={isActive ? 'primary' : 'secondary'}
            />
          </>
        );
      }} */}

      <FontIcon className={`icon-${iconName}`} size={20} fontcolor='dark' />
      <ListItemText primary={title} />
      {/* <NavLink to={to}>
        {({ isActive }) => (
          <ListItemText
            primary={title}
            sx={{ color: isActive ? 'green' : 'black' }}
          />
        )}
      </NavLink> */}
      {isBadge && (
        <IconButton disableRipple tabIndex={-1}>
          <Badge badgeContent={1} color='error' />
        </IconButton>
      )}
    </StyledSidebarListItem>
  );
};

export default SidebarListItem;
