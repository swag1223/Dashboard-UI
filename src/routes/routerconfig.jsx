import { createBrowserRouter } from 'react-router-dom';

import { NOT_FOUND, URLS } from '@constants/routes';

import MainContent from '@containers/MainContent';
import Error500Page from '@containers/Error500Page';
import Error404Page from '@containers/Error404Page';
import Layout from '@layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: URLS.DASHBOARD,
        element: <MainContent />,
      },
      {
        path: URLS.AUTH,
        element: <Error500Page />,
      },
      {
        path: URLS.PROFILE,
        element: <Error500Page />,
      },
      {
        path: URLS.SETTINGS,
        element: <Error500Page />,
      },
      {
        path: URLS.LOGOUT,
        element: <Error500Page />,
      },
      {
        path: URLS.HOME,
        element: <Error500Page />,
      },
      {
        path: URLS.ABOUT_US,
        element: <Error500Page />,
      },
      {
        path: URLS.CONTACT_US,
        element: <Error500Page />,
      },
      {
        path: URLS.PRODUCT_LIST,
        element: <Error500Page />,
      },
      {
        path: URLS.BILLING,
        element: <Error500Page />,
      },
      {
        path: URLS.INVOICE,
        element: <Error500Page />,
      },
      {
        path: URLS.MESSAGES,
        element: <Error500Page />,
      },
      {
        path: URLS.ACCOUNT,
        element: <Error500Page />,
      },
      {
        path: URLS.LOGIN,
        element: <Error500Page />,
      },
      {
        path: URLS.SIGNIN,
        element: <Error500Page />,
      },
      {
        path: URLS.DOCS,
        element: <Error500Page />,
      },
      {
        path: URLS.COMPONENTS,
        element: <Error500Page />,
      },
      {
        path: URLS.HELP,
        element: <Error500Page />,
      },
      {
        path: URLS.ADJUSTMENTS,
        element: <Error500Page />,
      },
      {
        path: URLS.GLOBE,
        element: <Error500Page />,
      },
      {
        path: URLS.COG,
        element: <Error500Page />,
      },

      {
        path: NOT_FOUND,
        element: <Error404Page />,
      },
    ],
  },
]);

export default router;
