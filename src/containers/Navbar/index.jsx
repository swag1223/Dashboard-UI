import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar, Box, IconButton, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import brandLogo from '@assets/images/Logo.svg';
import userAvatar from '@assets/images/Avatar.png';
import NavbarMenu from '@components/NavbarMenu';
import requestProducts from '@store/searchResults/actions';
import URLS from '@constants/routes';
import FontIcon from '@components/styledComponents/FontIcon';

import SearchResultItem from '@components/SearchResultItem';
import debounce from '@utils/debounce';
import DEBOUNCE_DELAY from '@constants/index';
import SearchBar from '@components/SearchBar';
import { NavItemsWrapper, StyledAppBar } from './style';

const Navbar = () => {
  // HOOKS

  const theme = useTheme();
  const [inputValue, setInputValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.searchResults);
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

  const renderOption = (props, option) => (
    <SearchResultItem {...props} option={option} />
  );

  const handleInputChange = (value) => {
    getProducts(value);
  };

  const debouncedHandleInputChange = useMemo(
    () => debounce(handleInputChange, DEBOUNCE_DELAY),
    []
  );

  const onInputChange = (e, newValue, reason) => {
    setInputValue(newValue);
    if (reason === 'clear') {
      handleInputChange(newValue);
    } else {
      debouncedHandleInputChange(newValue);
    }
  };
  return (
    <StyledAppBar position='sticky' elevation={0}>
      <Toolbar>
        <NavItemsWrapper gap={25}>
          <IconButton
            component={Link}
            to={URLS.DASHBOARD}
            sx={{
              display: 'none',
              [theme.breakpoints.up('sm')]: {
                display: 'flex',
              },
            }}>
            <img alt='Brand logo' src={brandLogo} />
          </IconButton>

          <IconButton
            sx={{
              [theme.breakpoints.up('sm')]: {
                display: 'none',
              },
            }}>
            <FontIcon className='icon-menu' size={30} fontcolor='dark' />
          </IconButton>

          <SearchBar
            searchResults={searchResults}
            renderOption={renderOption}
            inputValue={inputValue}
            onInputChange={onInputChange}
            placeholder='Search'
            iconName='search'
          />
        </NavItemsWrapper>

        <Box sx={{ flexGrow: 1 }} />

        <NavItemsWrapper gap={5}>
          <IconButton component={Link} to={URLS.NOT_FOUND}>
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
              src={userAvatar}
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
