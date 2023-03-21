import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import { URLS } from '@constants/routes';
import Navbar from '@containers/Navbar';
import Sidebar from '@containers/Sidebar';

const Layout = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const isErrorPage = !Object.values(URLS).includes(currentRoute);

  return (
    <Box sx={{ maxWidth: '1300px', margin: '0 auto' }}>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        {!isErrorPage && <Sidebar />}

        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
