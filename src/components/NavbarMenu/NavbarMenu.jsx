import PropTypes from 'prop-types';

import NavbarMenuItem from '@components/NavbarMenuItem';

import { StyledNavbarMenu } from './style';

const NavbarMenu = (props) => {
  const { anchorEl, open, handleMenuClose, items } = props;

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
      {items.map((item) => {
        return (
          <NavbarMenuItem
            key={item.to}
            closeMenuHandler={handleMenuClose}
            iconName={item.iconName}
            to={item.to}
            title={item.title}
            subtitle={item.subtitle}
          />
        );
      })}
    </StyledNavbarMenu>
  );
};

NavbarMenu.propTypes = {
  anchorEl: PropTypes.instanceOf(Element),
  open: PropTypes.bool,
  handleMenuClose: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      to: PropTypes.string,
      iconName: PropTypes.string,
    })
  ).isRequired,
};

NavbarMenu.defaultProps = {
  anchorEl: null,
  open: false,
};

export default NavbarMenu;
