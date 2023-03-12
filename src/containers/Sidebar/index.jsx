import FontIcon from '@components/FontIcon/style';
import { URL, NOT_FOUND } from '@constants/routes';
import useIsMobile from '@hooks/useIsMobile';
import { Divider, Drawer, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import toggleSidebar from '@store/sidebar/actions';
import { useDispatch, useSelector } from 'react-redux';

import SidebarListItem from './SidebarListItem';
import SidebarFooter from './SidebarFooter';
import SidebarCollapse from './SidebarCollapse';

const collapseSalesOptions = [
  { to: NOT_FOUND, title: 'Product List' },
  { to: NOT_FOUND, title: 'Billing' },
  { to: NOT_FOUND, title: 'Invoice' },
];

const collapsePagesOptions = [
  { to: NOT_FOUND, title: 'Home' },
  { to: NOT_FOUND, title: 'About Us' },
  { to: NOT_FOUND, title: 'Contact Us' },
];

const collapseAuthenticationOptions = [
  { to: URL.AUTH, title: 'Profile' },
  { to: URL.AUTH, title: 'Log In' },
  { to: URL.AUTH, title: 'Sign In' },
];

const Sidebar = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(
    (state) => state.sidebar.isSidebarVisible
  );
  // console.log(isMobile);

  const handleDrawerToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isSidebarVisible}
      onClose={handleDrawerToggle}
      sx={{
        '& .MuiDrawer-root': {
          position: 'absolute',
          top: '65px',
          maxWidth: '250px',
        },
        '& .MuiPaper-root': {
          position: 'absolute',
          top: `${isMobile ? '56px' : 0}`,
          maxWidth: '250px',
          // overflow: 'hidden',
        },
      }}>
      <List
        sx={{
          // width: '100%',
          // maxWidth: 300,
          bgcolor: 'background.paper',
        }}
        // component='nav'
        // aria-labelledby='nested-list-subheader'
      >
        <SidebarListItem
          to={URL.DASHBOARD}
          title='Overview'
          iconName='chart-pie'
        />

        <SidebarCollapse
          title='Pages'
          iconName='document-report'
          collapseItems={collapsePagesOptions}
        />
        <SidebarCollapse
          title='Sales'
          iconName='shopping-bag'
          collapseItems={collapseSalesOptions}
        />

        <ListItemButton>
          <ListItemIcon>
            <FontIcon className='icon-inbox-in' size={20} fontcolor='dark' />
          </ListItemIcon>
          <ListItemText primary='Messages' />
        </ListItemButton>

        <SidebarCollapse
          title='Authentication'
          iconName='lock-closed'
          collapseItems={collapseAuthenticationOptions}
        />

        <Divider />

        <SidebarListItem to={URL.AUTH} title='Docs' iconName='clipboard-list' />

        <SidebarListItem
          to={NOT_FOUND}
          title='Components'
          iconName='collection'
        />

        <SidebarListItem to={NOT_FOUND} title='Help' iconName='support' />
      </List>

      <Box sx={{ flexGrow: 1 }} />
      <SidebarFooter iconName='adjustments-converted' to='/adjustments' />
    </Drawer>
  );
};
export default Sidebar;
