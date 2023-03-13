import URLS from '@constants/routes';

const NavbarMenuList = [
  {
    to: URLS.PROFILE,
    iconName: 'user',
    title: 'John Doe',
    subtitle: 'email@example.com',
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
export default NavbarMenuList;
