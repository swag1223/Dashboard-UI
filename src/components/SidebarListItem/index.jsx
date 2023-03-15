import { NavLink } from 'react-router-dom';
import { Badge, Box, IconButton, useTheme } from '@mui/material';

import PropTypes from 'prop-types';

import FontIcon from '@components/styledComponents/FontIcon';
import useIsActive from '@hooks/useIsActive';
import { StyledSidebarListItemButton, StyledListItemText } from './style';

const SidebarListItem = (props) => {
  const { title, icon, to, badgeContent, onClick } = props;

  // HOOKS
  const theme = useTheme();
  const isActive = useIsActive(to);

  // VARIABLES
  const {
    palette: {
      common: { GRAY, GREEN },
    },
    typography: { pxToRem },
  } = theme;

  return (
    <StyledSidebarListItemButton component={NavLink} to={to} onClick={onClick}>
      <Box sx={{ width: pxToRem(20) }}>
        {icon && (
          <FontIcon
            className={`icon-${icon}`}
            size={20}
            fontcolor={isActive ? GREEN[500] : GRAY[900]}
          />
        )}
      </Box>
      <StyledListItemText primary={title} isActive={isActive} />
      {badgeContent > 0 && (
        <IconButton disableRipple tabIndex={-1}>
          <Badge badgeContent={badgeContent} color='error' />
        </IconButton>
      )}
    </StyledSidebarListItemButton>
  );
};

// PROPTYPES
SidebarListItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  to: PropTypes.string,
  badgeContent: PropTypes.number,
  onClick: PropTypes.func,
};

SidebarListItem.defaultProps = {
  icon: '',
  to: '',
  badgeContent: 0,
  onClick: () => {},
};

export default SidebarListItem;
