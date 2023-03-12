import { useDispatch, useSelector } from 'react-redux';
import { Box, useMediaQuery, useTheme, Divider } from '@mui/material';
import { URL } from '@constants/routes';
import toggleSidebar from '@store/sidebar/actions';
import SidebarListItem from '@components/SidebarListItem';
import StyledSidebarFooterList from '@components/SidebarFooter/style';
import SidebarFooter from '@components/SidebarFooter';
import SidebarCollapse from '@components/SidebarCollapse';

import {
  collapseAuthenticationOptions,
  collapsePagesOptions,
  collapseSalesOptions,
} from './sidebarconfig';
import { StyledDrawer, StyledSidebarMainList } from './style';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(
    (state) => state.sidebar.isSidebarVisible
  );

  const handleSiderbarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <StyledDrawer
      ismobile={isMobile}
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isSidebarVisible}
      onClose={handleSiderbarToggle}>
      <StyledSidebarMainList>
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

        <SidebarListItem
          to={URL.MESSAGES}
          title='Messages'
          iconName='inbox-in'
          isBadge
        />

        <SidebarCollapse
          title='Authentication'
          iconName='lock-closed'
          collapseItems={collapseAuthenticationOptions}
        />

        <Divider sx={{ width: '100%' }} />
        <SidebarListItem to={URL.DOCS} title='Docs' iconName='clipboard-list' />

        <SidebarListItem
          to={URL.COMPONENTS}
          title='Components'
          iconName='collection'
        />

        <SidebarListItem to={URL.HELP} title='Help' iconName='support' />
      </StyledSidebarMainList>

      <Box sx={{ flexGrow: 1 }} />
      <StyledSidebarFooterList>
        <SidebarFooter iconName='adjustments-converted' to={URL.ADJUSTMENTS} />
        <SidebarFooter iconName='globe-converted' to={URL.GLOBE} />
        <SidebarFooter iconName='cog--converted' to={URL.COG} />
      </StyledSidebarFooterList>
    </StyledDrawer>
  );
};
export default Sidebar;
