import FontIcon from '@components/FontIcon/style';
import {
  StyledListItemText,
  StyledSidebarListItemButton,
} from '@components/SidebarListItem/style';
import { Collapse, List, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import StyledCollapseListItemButton from './style';

const SidebarCollapse = ({ title, iconName, collapseItems, onClick }) => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const [collapseMenuOpen, setCollapseMenuOpen] = useState(false);

  const handleCollapseMenuClick = () => {
    setCollapseMenuOpen(!collapseMenuOpen);
  };
  return (
    <>
      <StyledSidebarListItemButton onClick={handleCollapseMenuClick}>
        <FontIcon className={`icon-${iconName}`} size={20} fontcolor='dark' />
        <ListItemText primary={title} />
        {collapseMenuOpen ? (
          <FontIcon
            className='icon-chevron-up-converted'
            size={16}
            fontcolor='dark'
          />
        ) : (
          <FontIcon
            className='icon-chevron-down-converted'
            size={16}
            fontcolor='dark'
          />
        )}
      </StyledSidebarListItemButton>
      <Collapse in={collapseMenuOpen} timeout='auto' unmountOnExit>
        <List disablePadding>
          {collapseItems.map((item) => {
            const isActive = currentRoute === item.to;
            return (
              <StyledCollapseListItemButton
                key={item.title}
                component={Link}
                to={item.to}
                onClick={onClick}>
                <StyledListItemText primary={item.title} isActive={isActive} />
              </StyledCollapseListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default SidebarCollapse;
