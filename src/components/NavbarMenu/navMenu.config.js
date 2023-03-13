import { URLS } from '@constants/routes';
import { COLORS } from '@constants/theme';

const NavbarMenuList = [
  {
    to: URLS.PROFILE,
    iconName: 'user',
    iconColor: COLORS.GRAY[500],
    title: 'John Doe',
    subtitle: 'email@example.com',
  },
  {
    to: URLS.SETTINGS,
    iconName: 'settings',
    iconColor: COLORS.GRAY[500],
    title: 'Settings',
  },
  {
    to: URLS.LOGOUT,
    iconName: 'logout',
    iconColor: COLORS.GRAY[500],
    title: 'Log Out',
  },
];

export default NavbarMenuList;
