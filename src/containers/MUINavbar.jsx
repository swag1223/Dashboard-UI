import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import FontIcon from '@components/fontIcon/FontIcon';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchInput from '@components/input/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import requestProducts from '@store/products/actions';
import products from '@mockData/products.json';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.light, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  display: 'none',
  // width: '100%',
  [theme.breakpoints.up('md')]: {
    display: 'block',
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export default function PrimarySearchAppBar() {
  const { productsData, isLoading } = useSelector((state) => state);

  console.log(productsData);
  console.log(isLoading);
  const dispatch = useDispatch();

  const onFocus = () => {
    dispatch(requestProducts(products));
  };
  // console.log(productsData);
  // console.log(isLoading);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: 'white', color: 'primary.main' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            logo
          </Typography>
          <Search>
            <SearchIconWrapper>
              <FontIcon name="icon-search" />
            </SearchIconWrapper>
            {productsData && (
              <SearchInput onFocus={onFocus} products={productsData} />
            )}
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit">
              <Link to="*">
                <FontIcon name="icon-Vector" />
              </Link>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              <Avatar alt="John Doe" src="src/assets/images/Avatar.svg" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </Box>
  );
}
