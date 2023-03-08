import AutocompleteInput from '@components/AutocompleteInput/AutocompleteInput';
import FontIcon from '@components/FontIcon/FontIcon';
import { StyledMenu } from '@components/Styled/Styled';
import URL from '@constants/routesConstants';
import products from '@mockData/products.json';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import requestProducts from '@store/products/actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  // HOOKS
  const theme = useTheme();
  const { productsData } = useSelector((state) => state.products);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  // HANDLERS
  const getProducts = () => {
    dispatch(requestProducts(products));
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position='static'
      elevation={0}
      variant='outlined'
      sx={{ backgroundColor: 'common.white', width: '100vw' }}>
      <Toolbar>
        <IconButton
          sx={{
            mr: 3,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
              display: 'flex',
            },
          }}>
          <img alt='Brand logo' src='src/assets/images/Logo.svg' />
        </IconButton>

        <IconButton
          sx={{
            mr: 3,
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

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconButton>
            <Link className='links' to={URL.NOT_FOUND}>
              <FontIcon
                className='icon-bell'
                size={20}
                fontcolor='dark'
                shadow={4}
                padding={9}
              />
            </Link>
          </IconButton>

          <IconButton onClick={handleClick}>
            <Avatar
              alt='John Doe'
              src='src/assets/images/Avatar.png'
              sx={{ boxShadow: `${theme.shadows[4]}` }}
            />
          </IconButton>
        </Box>

        <StyledMenu
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
          onClose={handleClose}>
          <MenuItem
            onClick={handleClose}
            disableRipple
            sx={{ display: 'flex', gap: 2 }}>
            <FontIcon className='icon-user' size={20} fontcolor='main' />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h4'>John Doe</Typography>
              <Typography variant='body2' color='text.secondary'>
                email@example.com
              </Typography>
            </Box>
          </MenuItem>

          <MenuItem
            onClick={handleClose}
            disableRipple
            sx={{ display: 'flex', gap: 2 }}>
            <FontIcon className='icon-settings' size={20} fontcolor='main' />
            Settings
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            disableRipple
            sx={{ display: 'flex', gap: 2 }}>
            <FontIcon className='icon-logout' size={20} fontcolor='main' />
            Log Out
          </MenuItem>
        </StyledMenu>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
