import FontIcon from '@components/FontIcon/style';
import StyledSidebarListItem from '@components/SidebarListItem/style';
import { Collapse, List, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import StyledCollapseListItemButton from './style';

const SidebarCollapse = ({ title, iconName, collapseItems }) => {
  const [collapseMenuOpen, setCollapseMenuOpen] = useState(false);

  const handleCollapseMenuClick = () => {
    setCollapseMenuOpen(!collapseMenuOpen);
  };
  return (
    <>
      <StyledSidebarListItem onClick={handleCollapseMenuClick}>
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
      </StyledSidebarListItem>
      <Collapse in={collapseMenuOpen} timeout='auto' unmountOnExit>
        <List disablePadding>
          {collapseItems.map((item) => {
            return (
              <StyledCollapseListItemButton
                key={item.title}
                component={Link}
                to={item.to}>
                {item.title}
              </StyledCollapseListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default SidebarCollapse;
