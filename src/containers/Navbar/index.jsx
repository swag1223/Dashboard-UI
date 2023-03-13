import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import toggleSidebar from '@store/sidebar/actions';

import { Avatar, Box, IconButton, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import brandLogo from '@assets/images/Logo.svg';
import userAvatar from '@assets/images/Avatar.png';
import DEBOUNCE_DELAY from '@constants/index';
import { COLORS } from '@constants/theme';
import { URLS } from '@constants/routes';
import NavbarMenu from '@components/NavbarMenu';
import FontIcon from '@components/styledComponents/FontIcon';
import SearchBar from '@components/SearchBar';
import SearchResultItem from '@components/SearchResultItem';
import requestSearchResults from '@store/searchResults/actions';
import debounce from '@utils/debounce';
import { NavItemsWrapper, StyledAppBar } from './style';

const Navbar = () => {
  // HOOKS
  const theme = useTheme();
  const [inputValue, setInputValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.searchResults);

  // VARIABLES
  // If true, the popup component is shown.
  const open = Boolean(anchorEl);

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

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
   *Handles changes to the input value in the search bar
   *@param {string} value - The new value of the input
   */
  const handleInputChange = (value) => {
    dispatch(requestSearchResults(value));
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

  // Debounce the handleInputChange function to improve performance
  const debouncedHandleInputChange = useMemo(
    () => debounce(handleInputChange, DEBOUNCE_DELAY),
    []
  );

  /**
   * Event handler for changes to the input value in the search bar
   *@param {object} e - The event object
   *@param {string} newValue - The new value of the input
   *@param {string} reason - The reason for the change
   */
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
            onClick={handleSidebarToggle}
            sx={{
              [theme.breakpoints.up('sm')]: {
                display: 'none',
              },
            }}>
            <FontIcon
              className='icon-menu'
              size={30}
              fontcolor={COLORS.GRAY[900]}
            />
          </IconButton>
          <SearchBar
            searchResults={searchResults}
            renderOption={renderOption}
            inputValue={inputValue}
            onInputChange={onInputChange}
            placeholder='Search'
            iconName='search'
            iconColor={COLORS.GRAY[500]}
          />
        </NavItemsWrapper>
        <Box sx={{ flexGrow: 1 }} />
        <NavItemsWrapper gap={5}>
          <IconButton component={Link} to={URLS.NOT_FOUND}>
            <FontIcon
              className='icon-bell'
              size={20}
              fontcolor={COLORS.GRAY[900]}
              shadow={4}
              padding={9}
            />
          </IconButton>
          <IconButton onClick={handleAvatarClick}>
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
