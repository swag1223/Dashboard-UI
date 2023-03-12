import { createBrowserRouter } from 'react-router-dom';
import { NOT_FOUND, URL } from '@constants/routes';
import Error404Page from '@containers/Error404Page';
import Error500Page from '@containers/Error500Page';
import MainContent from '@containers/MainContent';
import Layout from '@layout/index';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: URL.DASHBOARD,
        element: <MainContent />,
      },
      {
        path: URL.AUTH,
        element: <Error500Page />,
      },
      {
        path: URL.PROFILE,
        element: <Error500Page />,
      },
      {
        path: URL.SETTINGS,
        element: <Error500Page />,
      },
      {
        path: URL.LOGOUT,
        element: <Error500Page />,
      },
      {
        path: URL.HOME,
        element: <Error500Page />,
      },
      {
        path: URL.ABOUT_US,
        element: <Error500Page />,
      },
      {
        path: URL.CONTACT_US,
        element: <Error500Page />,
      },
      {
        path: URL.PRODUCT_LIST,
        element: <Error500Page />,
      },
      {
        path: URL.BILLING,
        element: <Error500Page />,
      },
      {
        path: URL.INVOICE,
        element: <Error500Page />,
      },
      {
        path: URL.MESSAGES,
        element: <Error500Page />,
      },
      {
        path: URL.ACCOUNT,
        element: <Error500Page />,
      },
      {
        path: URL.LOGIN,
        element: <Error500Page />,
      },
      {
        path: URL.SIGNIN,
        element: <Error500Page />,
      },
      {
        path: URL.DOCS,
        element: <Error500Page />,
      },
      {
        path: URL.COMPONENTS,
        element: <Error500Page />,
      },
      {
        path: URL.HELP,
        element: <Error500Page />,
      },
      {
        path: URL.ADJUSTMENTS,
        element: <Error500Page />,
      },
      {
        path: URL.GLOBE,
        element: <Error500Page />,
      },
      {
        path: URL.COG,
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
