import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import AutocompleteInput from '@components/AutocompleteInput';
import FontIcon from '@components/FontIcon/style';
import NavbarMenu from '@components/NavbarMenu';
import requestProducts from '@store/products/actions';
import URL from '@constants/routes';

const NavItemsWrapper = styled(Box)(({ theme, gap }) => ({
  display: 'flex',
  gap: theme.typography.pxToRem(gap),
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderBottom: `1px solid ${theme.palette.secondary.border}`,
}));

const Navbar = () => {
  // HOOKS
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { productsData } = useSelector((state) => state.products);
  // VARIABLES
  const open = Boolean(anchorEl);

  // HANDLERS
  const getProducts = (value) => {
    dispatch(requestProducts(value));
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position='sticky' elevation={0}>
      <Toolbar>
        <NavItemsWrapper gap={25}>
          <IconButton
            component={Link}
            to={URL.DASHBOARD}
            sx={{
              display: 'none',
              [theme.breakpoints.up('sm')]: {
                display: 'flex',
              },
            }}>
            <img alt='Brand logo' src='src/assets/images/Logo.svg' />
          </IconButton>

          <IconButton
            sx={{
              [theme.breakpoints.up('sm')]: {
                display: 'none',
              },
            }}>
            <FontIcon className='icon-menu' size={30} fontcolor='dark' />
          </IconButton>

          <AutocompleteInput
            getProducts={getProducts}
            productsData={productsData}
          />
        </NavItemsWrapper>

        <Box sx={{ flexGrow: 1 }} />

        <NavItemsWrapper gap={5}>
          <IconButton component={Link} to={URL.NOT_FOUND}>
            <FontIcon
              className='icon-bell'
              size={20}
              fontcolor='dark'
              shadow={4}
              padding={9}
            />
          </IconButton>

          <IconButton onClick={handleClick}>
            <Avatar
              alt='John Doe'
              src='src/assets/images/Avatar.png'
              sx={{ boxShadow: `${theme.shadows[4]}` }}
            />
          </IconButton>
        </NavItemsWrapper>

        <NavbarMenu
          anchorEl={anchorEl}
          open={open}
          handleMenuClose={handleMenuClose}
        />
      </Toolbar>
    </StyledAppBar>
  );
};
export default Navbar;
