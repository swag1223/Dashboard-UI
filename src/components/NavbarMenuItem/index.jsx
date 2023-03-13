import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

import FontIcon from '@components/styledComponents/FontIcon';
import { StyledNavbarMenuItem, StyledNavbarMenuContent } from './style';

const NavbarMenuItem = ({
  closeMenuHandler,
  to,
  iconName,
  iconColor,
  title,
  subtitle,
}) => {
  return (
    <StyledNavbarMenuItem
      onClick={closeMenuHandler}
      component={Link}
      to={to}
      disableRipple>
      <FontIcon
        className={`icon-${iconName}`}
        size={20}
        fontcolor={iconColor}
      />
      <StyledNavbarMenuContent>
        <Typography variant='h4'>{title}</Typography>
        {subtitle && (
          <Typography variant='body2' color='text.secondary'>
            {subtitle}
          </Typography>
        )}
      </StyledNavbarMenuContent>
    </StyledNavbarMenuItem>
  );
};

NavbarMenuItem.propTypes = {
  closeMenuHandler: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

NavbarMenuItem.defaultProps = {
  subtitle: '',
};
export default NavbarMenuItem;
