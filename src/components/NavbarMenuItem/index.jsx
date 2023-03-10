import { StyledNavbarMenuItem, StyledNavbarMenuContent } from './style';

import FontIcon from '@components/FontIcon/style';
import { Typography } from '@mui/material';

const NavbarMenuItem = ({ closeMenuHandler, iconName, title, subtitle }) => {
  return (
    <StyledNavbarMenuItem onClick={closeMenuHandler} disableRipple>
      <FontIcon className={`icon-${iconName}`} size={20} fontcolor='main' />

      <StyledNavbarMenuContent>
        <Typography variant='h4'>{title}</Typography>
        {subtitle ? (
          <Typography variant='body2' color='text.secondary'>
            {subtitle}
          </Typography>
        ) : (
          ''
        )}
      </StyledNavbarMenuContent>
    </StyledNavbarMenuItem>
  );
};

export default NavbarMenuItem;
