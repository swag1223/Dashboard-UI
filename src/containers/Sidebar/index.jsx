import { useDispatch, useSelector } from 'react-redux';
import { Box, useMediaQuery, useTheme, Divider } from '@mui/material';
import { URLS } from '@constants/routes';
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
      isMobile={isMobile}
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isSidebarVisible}
      onClose={handleSiderbarToggle}>
      <StyledSidebarMainList>
        <SidebarListItem
          to={URLS.DASHBOARD}
          title='Overview'
          iconName='chart-pie'
          onClick={handleSiderbarToggle}
        />

        <SidebarCollapse
          title='Pages'
          iconName='document-report'
          collapseItems={collapsePagesOptions}
          onClick={handleSiderbarToggle}
        />
        <SidebarCollapse
          title='Sales'
          iconName='shopping-bag'
          collapseItems={collapseSalesOptions}
          onClick={handleSiderbarToggle}
        />

        <SidebarListItem
          to={URLS.MESSAGES}
          title='Messages'
          iconName='inbox-in'
          isBadge
          onClick={handleSiderbarToggle}
        />

        <SidebarCollapse
          title='Authentication'
          iconName='lock-closed'
          collapseItems={collapseAuthenticationOptions}
          onClick={handleSiderbarToggle}
        />

        <Divider sx={{ width: '100%' }} />
        <SidebarListItem
          to={URLS.DOCS}
          title='Docs'
          iconName='clipboard-list'
          onClick={handleSiderbarToggle}
        />

        <SidebarListItem
          to={URLS.COMPONENTS}
          title='Components'
          iconName='collection'
        />

        <SidebarListItem
          to={URLS.HELP}
          title='Help'
          iconName='support'
          onClick={handleSiderbarToggle}
        />
      </StyledSidebarMainList>

      <Box sx={{ flexGrow: 1 }} />
      <StyledSidebarFooterList>
        <SidebarFooter
          iconName='adjustments-converted'
          to={URLS.ADJUSTMENTS}
          onClick={handleSiderbarToggle}
        />
        <SidebarFooter
          iconName='globe-converted'
          to={URLS.GLOBE}
          onClick={handleSiderbarToggle}
        />
        <SidebarFooter
          iconName='cog--converted'
          to={URLS.COG}
          onClick={handleSiderbarToggle}
        />
      </StyledSidebarFooterList>
    </StyledDrawer>
  );
};
export default Sidebar;
