import { URLS } from '@constants/routes';

export const sidebarMenuItems = [
  {
    to: URLS.DASHBOARD,
    icon: 'chart-pie',
    title: 'Overview',
  },

  {
    icon: 'document-report',
    title: 'Pages',
    subItems: [
      { to: URLS.ABOUT_US, title: 'Product List', toggleSidebar: true },
      { to: URLS.CONTACT_US, title: 'Contact Us', toggleSidebar: true },
    ],
  },

  {
    icon: 'shopping-bag',
    title: 'Sales',
    subItems: [
      { to: URLS.PRODUCT_LIST, title: 'Product List', toggleSidebar: true },
      { to: URLS.BILLING, title: 'Billing', toggleSidebar: true },
      { to: URLS.INVOICE, title: 'Invoice', toggleSidebar: true },
    ],
  },

  {
    to: URLS.MESSAGES,
    icon: 'inbox-in',
    title: 'Messages',
    badgeContent: 1,
  },

  {
    icon: 'lock-closed',
    title: 'Authentication',
    isDivider: true,
    subItems: [
      { to: URLS.ACCOUNT, title: 'Account', toggleSidebar: true },
      { to: URLS.LOGIN, title: 'Log In', toggleSidebar: true },
      { to: URLS.SIGNIN, title: 'Sign In', toggleSidebar: true },
    ],
  },

  {
    to: URLS.DOCS,
    icon: 'clipboard-list',
    title: 'Docs',
  },

  {
    to: URLS.COMPONENTS,
    icon: 'collection',
    title: 'Components',
  },

  {
    to: URLS.HELP,
    icon: 'support',
    title: 'Help',
  },
];

export const sidebarFooterItems = [
  {
    to: URLS.ADJUSTMENTS,
    icon: 'adjustments',
  },
  {
    to: URLS.GLOBE,
    icon: 'globe',
  },
  {
    to: URLS.COG,
    icon: 'cog',
  },
];
