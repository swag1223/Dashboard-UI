import URL from '@constants/routesConstants';
import Error404Page from '@containers/error404/Error404Page';
import Error500Page from '@containers/error500/Error500Page';
import Layout from '@containers/Layout/Layout';
import MainContent from '@containers/mainContent/MainContent';
import { createBrowserRouter } from 'react-router-dom';

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
        path: URL.NOT_FOUND,
        element: <Error404Page />,
      },
    ],
  },
]);
export default router;
