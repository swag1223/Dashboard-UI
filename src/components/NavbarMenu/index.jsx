import NavbarMenuList from '@components/NavbarMenuItem';

import navBarMenuItems from './navMenu.config';
import StyledNavbarMenu from './style';

const NavbarMenu = ({ anchorEl, open, handleMenuClose }) => (
  <StyledNavbarMenu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleMenuClose}>
    {navBarMenuItems.map((item) => (
      <NavbarMenuList
        key={item.title}
        closeMenuHandler={handleMenuClose}
        iconName={item.iconName}
        title={item.title}
        subtitle={item.subtitle}
      />
    ))}
  </StyledNavbarMenu>
);

export default NavbarMenu;
