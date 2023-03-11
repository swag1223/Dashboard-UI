import { URL } from '@constants/routes';

const NavbarMenuList = [
  {
    to: URL.PROFILE,
    iconName: 'user',
    title: 'John Doe',
    subtitle: 'email@example.com',
  },
  {
    to: URL.SETTINGS,
    iconName: 'settings',
    title: 'Settings',
  },
  {
    to: URL.LOGOUT,
    iconName: 'logout',
    title: 'Log Out',
  },
];
export default NavbarMenuList;
