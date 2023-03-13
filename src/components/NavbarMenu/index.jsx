import PropTypes from 'prop-types';

import NavbarMenuList from '@components/NavbarMenuItem';
import navBarMenuItems from './navMenu.config';
import StyledNavbarMenu from './style';

const NavbarMenu = (props) => {
  const { anchorEl, open, handleMenuClose } = props;
  return (
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
          iconColor={item.iconColor}
          to={item.to}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </StyledNavbarMenu>
  );
};

NavbarMenu.propTypes = {
  anchorEl: PropTypes.instanceOf(Element),
  open: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
};

NavbarMenu.defaultProps = {
  anchorEl: null,
};
export default NavbarMenu;
