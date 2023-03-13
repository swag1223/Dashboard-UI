import { URLS } from '@constants/routes';

export const collapseSalesOptions = [
  { to: URLS.PRODUCT_LIST, title: 'Product List' },
  { to: URLS.BILLING, title: 'Billing' },
  { to: URLS.INVOICE, title: 'Invoice' },
];

export const collapsePagesOptions = [
  { to: URLS.ABOUT_US, title: 'About Us' },
  { to: URLS.CONTACT_US, title: 'Contact Us' },
];

export const collapseAuthenticationOptions = [
  { to: URLS.ACCOUNT, title: 'Account' },
  { to: URLS.LOGIN, title: 'Log In' },
  { to: URLS.SIGNIN, title: 'Sign In' },
];
