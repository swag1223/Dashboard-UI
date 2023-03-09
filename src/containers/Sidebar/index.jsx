import SidebarCollapse from './SidebarCollapse';
import SidebarListItem from './SidebarListItem';

import FontIcon from '@components/FontIcon/FontIcon';
import URL from '@constants/routesConstants';
import useIsMobile from '@hooks/useIsMobile';
import { Divider, Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import toggleSidebar from '@store/sidebar/actions';
import { useDispatch, useSelector } from 'react-redux';

const collapseSalesOptions = [
  { to: URL.NOT_FOUND, title: 'Product List' },
  { to: URL.NOT_FOUND, title: 'Billing' },
  { to: URL.NOT_FOUND, title: 'Invoice' },
];

const collapsePagesOptions = [
  { to: URL.NOT_FOUND, title: 'Home' },
  { to: URL.NOT_FOUND, title: 'About Us' },
  { to: URL.NOT_FOUND, title: 'Contact Us' },
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
        },
        '& .MuiPaper-root': {
          position: 'absolute',
          // overflow: 'hidden',
        },
      }}>
      <List
        sx={{
          width: '100%',
          maxWidth: 300,
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
          to={URL.NOT_FOUND}
          title='Components'
          iconName='collection'
        />

        <SidebarListItem to={URL.NOT_FOUND} title='Help' iconName='support' />
      </List>
    </Drawer>
  );
};
export default Sidebar;
