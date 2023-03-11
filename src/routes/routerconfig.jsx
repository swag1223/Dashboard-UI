import { createBrowserRouter } from 'react-router-dom';
import URL from '@constants/routes';
import Error404Page from '@containers/Error404Page';
import Error500Page from '@containers/Error500Page';
import MainContent from '@containers/MainContent';
import Layout from '@layout';

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
        path: URL.NOT_FOUND,
        element: <Error404Page />,
      },
    ],
  },
]);
export default router;
