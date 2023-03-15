import { NavLink } from 'react-router-dom';

import { IconButton, useTheme } from '@mui/material';

import PropTypes from 'prop-types';

import FontIcon from '@components/FontIcon/style';
import useIsActive from '@hooks/useIsActive';

const SidebarFooter = (props) => {
  const { icon, to, onClick } = props;

  // HOOKS
  const theme = useTheme();
  const isActive = useIsActive(to);

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
