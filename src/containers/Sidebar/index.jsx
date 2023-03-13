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
      isMobile={isMobile}
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isSidebarVisible}
      onClose={handleSiderbarToggle}>
      <StyledSidebarMainList>
        <SidebarListItem
          to={URL.DASHBOARD}
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
          to={URL.MESSAGES}
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
          to={URL.DOCS}
          title='Docs'
          iconName='clipboard-list'
          onClick={handleSiderbarToggle}
        />

        <SidebarListItem
          to={URL.COMPONENTS}
          title='Components'
          iconName='collection'
        />

        <SidebarListItem
          to={URL.HELP}
          title='Help'
          iconName='support'
          onClick={handleSiderbarToggle}
        />
      </StyledSidebarMainList>

      <Box sx={{ flexGrow: 1 }} />
      <StyledSidebarFooterList>
        <SidebarFooter
          iconName='adjustments-converted'
          to={URL.ADJUSTMENTS}
          onClick={handleSiderbarToggle}
        />
        <SidebarFooter
          iconName='globe-converted'
          to={URL.GLOBE}
          onClick={handleSiderbarToggle}
        />
        <SidebarFooter
          iconName='cog--converted'
          to={URL.COG}
          onClick={handleSiderbarToggle}
        />
      </StyledSidebarFooterList>
    </StyledDrawer>
  );
};
export default Sidebar;
