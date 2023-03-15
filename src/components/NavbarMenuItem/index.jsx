import { Link } from 'react-router-dom';

import { Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import FontIcon from '@components/styledComponents/FontIcon';
import { StyledNavbarMenuItem, StyledNavbarMenuContent } from './style';

const NavbarMenuItem = (props) => {
  const { closeMenuHandler, to, iconName, title, subtitle } = props;
  const theme = useTheme();
  const {
    palette: {
      common: { GRAY },
    },
  } = theme;

  return (
    <StyledNavbarMenuItem
      onClick={closeMenuHandler}
      component={Link}
      to={to}
      disableRipple>
      <FontIcon
        className={`icon-${iconName}`}
        size={20}
        fontcolor={GRAY[500]}
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
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

NavbarMenuItem.defaultProps = {
  title: '',
  subtitle: '',
};

export default NavbarMenuItem;
