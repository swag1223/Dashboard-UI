import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';

import Input from '@components/input/Input';
import FontIcon from '@components/fontIcon/FontIcon';
import { useDispatch, useSelector } from 'react-redux';
import requestProducts from '@store/products/actions';
import products from '@mockData/products.json';
import { Link } from 'react-router-dom';

const StyledInputWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  display: 'none',
  boxShadow: theme.shadows[1],

  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    display: 'block'
  }
}));

const StyledSearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 8,
    marginTop: theme.spacing(1),
    minWidth: 200,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
  }
}));

function NavBar() {
  const theme = useTheme();
  // console.log(theme);
  const { productsData } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const getProducts = () => {
    dispatch(requestProducts(products));
  };
  console.log(productsData);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      variant="outlined"
      sx={{ backgroundColor: 'white', color: 'primary.main' }}>
      <Toolbar>
        <IconButton
          sx={{
            mr: 2,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
              display: 'flex'
            }
          }}>
          <img alt="Brand logo" src="src/assets/images/Logo.svg" />
        </IconButton>

        <IconButton
          sx={{
            mr: 2,
            [theme.breakpoints.up('sm')]: {
              display: 'none'
            }
          }}>
          <img alt="Brand logo" src="src/assets/images/Menu.svg" />
        </IconButton>

        <StyledInputWrapper>
          <StyledSearchIconWrapper>
            <FontIcon className="icon-search" size={16} fontcolor="light" />
          </StyledSearchIconWrapper>
          <Input
            getProducts={getProducts}
            productsData={productsData}
            inputSx={{ width: 402 }}
          />
        </StyledInputWrapper>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <IconButton>
            <Link to="*">
              <FontIcon
                className="icon-bell"
                size={20}
                fontcolor="dark"
                shadow={4}
                padding={9}
              />
            </Link>
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit">
            <Avatar
              alt="John Doe"
              src="src/assets/images/Avatar.png"
              sx={{ boxShadow: `${theme.shadows[4]}` }}
            />
          </IconButton>
        </Box>

        <StyledMenu
          // id="demo-customized-menu"
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}>
          <MenuItem
            onClick={handleClose}
            disableRipple
            sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* <FontIcon className="icon-user" size={20} fontcolor="dark"/> */}
            John Doe
            <Typography variant="body2">email@example.com</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            Account
          </MenuItem>

          <MenuItem onClick={handleClose} disableRipple>
            {/* <FontIcon className="icon-settings" size={20} fontcolor="dark" /> */}
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            Log Out
          </MenuItem>
        </StyledMenu>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
