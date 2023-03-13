import { URL } from '@constants/routes';

export const collapseSalesOptions = [
  { to: URL.PRODUCT_LIST, title: 'Product List' },
  { to: URL.BILLING, title: 'Billing' },
  { to: URL.INVOICE, title: 'Invoice' },
];

export const collapsePagesOptions = [
  { to: URL.ABOUT_US, title: 'About Us' },
  { to: URL.CONTACT_US, title: 'Contact Us' },
];

export const collapseAuthenticationOptions = [
  { to: URL.ACCOUNT, title: 'Account' },
  { to: URL.LOGIN, title: 'Log In' },
  { to: URL.SIGNIN, title: 'Sign In' },
];
