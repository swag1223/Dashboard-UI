import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Divider, List, useMediaQuery, useTheme } from '@mui/material';

import toggleSidebar from '@store/sidebar/actionCreators';
import SidebarListItem from '@components/SidebarListItem';
import StyledSidebarFooterList from '@components/SidebarFooter/style';
import SidebarFooter from '@components/SidebarFooter';
import SidebarCollapse from '@components/SidebarCollapse';
import { Fragment } from 'react';
import { sidebarFooterItems, sidebarMenuItems } from './sidebarconfig';
import StyledDrawer from './style';

const Sidebar = () => {
  // HOOKS
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(
    (state) => state.sidebar.isSidebarVisible
  );

  // HANDLERS
  /**
   * Toggles the sidebar by dispatching the `toggleSidebar` action.
   */
  const handleSiderbarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <StyledDrawer
      isMobile={isMobile}
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isSidebarVisible}
      onClose={handleSiderbarToggle}>
      <List>
        {sidebarMenuItems.map((item) => (
          <Fragment key={item.title}>
            {item.subItems ? (
              <SidebarCollapse
                key={item.title}
                icon={item.icon}
                to={item.to}
                title={item.title}
                subItems={item.subItems}
                onClick={handleSiderbarToggle}
              />
            ) : (
              <SidebarListItem
                key={item.title}
                icon={item.icon}
                to={item.to}
                title={item.title}
                badgeContent={item.badgeContent}
                onClick={handleSiderbarToggle}
              />
            )}
            {item.isDivider && <Divider />}
          </Fragment>
        ))}
      </List>

      <StyledSidebarFooterList>
        {sidebarFooterItems.map((item) => {
          return (
            <SidebarFooter
              component={NavLink}
              key={item.to}
              to={item.to}
              icon={item.icon}
              onClick={handleSiderbarToggle}
            />
          );
        })}
      </StyledSidebarFooterList>
    </StyledDrawer>
  );
};

export default Sidebar;
