import { createBrowserRouter } from 'react-router-dom';
import URLS from '@constants/routes';
import Error404Page from '@containers/Error404Page';
import Error500Page from '@containers/Error500Page';
import MainContent from '@containers/MainContent';
import Layout from '@layout';

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
        path: URLS.NOT_FOUND,
        element: <Error404Page />,
      },
    ],
  },
]);
export default router;
