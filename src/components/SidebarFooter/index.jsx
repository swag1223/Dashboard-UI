import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IconButton, useTheme } from '@mui/material';

import FontIcon from '@components/styledComponents/FontIcon';
import useIsRouteActive from '@hooks/useIsRouteActive';

const SidebarFooter = (props) => {
  const { icon, to, onClick } = props;

  // HOOKS
  const theme = useTheme();
  const isActive = useIsRouteActive(to);

  // VARIABLES
  const {
    palette: {
      common: { GRAY, GREEN },
    },
  } = theme;

  return (
    <IconButton component={NavLink} to={to} onClick={onClick}>
      <FontIcon
        className={`icon-${icon}`}
        size={20}
        fontcolor={isActive ? GREEN[500] : GRAY[900]}
      />
    </IconButton>
  );
};

// PROPTYPES
SidebarFooter.propTypes = {
  icon: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarFooter.defaultProps = {
  icon: '',
  to: '',
  onClick: () => {},
};

export default SidebarFooter;
