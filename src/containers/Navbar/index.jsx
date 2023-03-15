import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar, Box, IconButton, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import brandLogo from '@assets/images/Logo.svg';
import CONSTANTS from '@constants/index';
import URLS from '@constants/routes';
import NavbarMenu from '@components/NavbarMenu';
import FontIcon from '@components/styledComponents/FontIcon';
import SearchBar from '@components/SearchBar';
import SearchResultItem from '@components/SearchResultItem';
import { requestProductsSearchResults } from '@store/searchResults';
import { requestUserData } from '@store/userData';
import debounce from '@utils/index';
import { NavItemsWrapper, StyledAppBar } from './style';

const Navbar = () => {
  // HOOKS
  const theme = useTheme();
  const [inputValue, setInputValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.searchResults);
  const { userData } = useSelector((state) => state.userData);

  // dispatches request for loggedin user's data.
  useEffect(() => {
    dispatch(requestUserData());
  }, []);

  // VARIABLES
  // Navbar PopUp menu config
  const NavBarMenuItems = [
    {
      to: URLS.PROFILE,
      iconName: 'user',
      title: userData.name,
      subtitle: userData.email,
    },
    {
      to: URLS.SETTINGS,
      iconName: 'settings',
      title: 'Settings',
    },
    {
      to: URLS.LOGOUT,
      iconName: 'logout',
      title: 'Log Out',
    },
  ];

  // If true, the popup component is shown.
  const open = Boolean(anchorEl);

  const {
    palette: {
      common: { GRAY },
    },
    shadows,
  } = theme;

  // HANDLERS
  /**
   * Handler function to set the anchor element for the popup menu on click of avatar
   * @param {Event} e - The click event object
   */
  const handleAvatarClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  /**
   * Handler function to close the popup menu
   */
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  /**
   *Dispatches an action to request search results for the specified search value.
   *@param {string} value - The search value to request results for.
   */
  const getSearchResults = (value) => {
    dispatch(requestProductsSearchResults(value));
  };

  /**
   *Renders a search result option
   *@param {object} props - The props for the SearchResultItem component
   *@param {object} option - The option to render
   *@return {JSX.Element} The JSX code for the SearchResultItem component
   */
  const renderOption = (props, option) => (
    <SearchResultItem {...props} option={option} />
  );

  // Debounce the getSearchResults function to improve performance
  const debouncedGetSearchResults = useMemo(
    () => debounce(getSearchResults, CONSTANTS.DEBOUNCE_DELAY),
    []
  );

  /**
   * Event handler for changes to the input value in the search bar
   *@param {object} e - The event object
   *@param {string} newValue - The new value of the input
   *@param {string} reason - The reason for the change
   */
  const handleInputChange = (e, newValue, reason) => {
    setInputValue(newValue);
    if (reason === 'clear') {
      getSearchResults(newValue);
    } else {
      debouncedGetSearchResults(newValue);
    }
  };

  return (
    <StyledAppBar position='sticky' elevation={0}>
      <Toolbar>
        {/* NAVIGATION ITEMS */}
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
            <FontIcon className='icon-menu' size={30} fontcolor={GRAY[900]} />
          </IconButton>
          <SearchBar
            inputValue={inputValue}
            options={searchResults}
            renderOption={renderOption}
            onInputChange={handleInputChange}
            freeSolo
          />
        </NavItemsWrapper>
        <Box sx={{ flexGrow: 1 }} />
        <NavItemsWrapper gap={5}>
          <IconButton component={Link} to={URLS.NOT_FOUND}>
            <FontIcon
              className='icon-bell'
              size={20}
              fontcolor={GRAY[900]}
              shadow={4}
              padding={9}
            />
          </IconButton>
          <IconButton onClick={handleAvatarClick}>
            <Avatar
              alt={userData.title}
              src={userData.avatar}
              sx={{ boxShadow: shadows[4] }}
            />
          </IconButton>
        </NavItemsWrapper>
        <NavbarMenu
          items={NavBarMenuItems}
          anchorEl={anchorEl}
          open={open}
          handleMenuClose={handleMenuClose}
        />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
