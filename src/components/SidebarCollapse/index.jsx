import { useState } from 'react';
import PropTypes from 'prop-types';

import { Collapse, List, ListItemText, useTheme } from '@mui/material';

import SidebarListItem from '@components/SidebarListItem';
import { StyledSidebarListItemButton } from '@components/SidebarListItem/style';
import FontIcon from '@components/styledComponents/FontIcon';

const SidebarCollapse = (props) => {
  const { title, icon, subItems, onClick } = props;

  // HOOKS
  const theme = useTheme();

  // VARIABLES
  const {
    palette: {
      common: { GRAY },
    },
    mixins: { ellipsis },
  } = theme;

  const [collapseMenuOpen, setCollapseMenuOpen] = useState(false);
  const handleCollapseMenuClick = () => {
    setCollapseMenuOpen(!collapseMenuOpen);
  };
  return (
    <>
      <StyledSidebarListItemButton onClick={handleCollapseMenuClick}>
        <FontIcon className={`icon-${icon}`} size={20} fontcolor={GRAY[900]} />
        <ListItemText
          primary={title}
          sx={{
            ...ellipsis(),
          }}
        />
        {collapseMenuOpen ? (
          <FontIcon
            className='icon-chevron-up'
            size={16}
            fontcolor={GRAY[900]}
          />
        ) : (
          <FontIcon
            className='icon-chevron-down'
            size={16}
            fontcolor={GRAY[900]}
          />
        )}
      </StyledSidebarListItemButton>

      <Collapse in={collapseMenuOpen} timeout='auto' unmountOnExit>
        <List disablePadding>
          {subItems.map((item) => {
            return (
              <SidebarListItem
                key={item.title}
                to={item.to}
                title={item.title}
                onClick={onClick}
              />
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

SidebarCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  subItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};

SidebarCollapse.defaultProps = {
  icon: '',
  subItems: [],
  onClick: () => {},
};

export default SidebarCollapse;
