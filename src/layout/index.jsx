import { URLS } from '@constants/routes';
import Navbar from '@containers/Navbar';
import Sidebar from '@containers/Sidebar';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  // const theme = useTheme();
  const location = useLocation();

  // console.log(location);
  const currentRoute = location.pathname;
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // console.log(isMobile);

  const isErrorPage = !Object.values(URLS).includes(currentRoute);
  // console.log(isErrorPage);

  // const shouldApplyMarginLeft = !isMobile && !isErrorPage;
  return (
    <Box sx={{ maxWidth: '1300px', margin: '0 auto' }}>
      <Navbar />
      <Box
        sx={{
          position: 'relative',
          // height: '100vh',
          display: 'flex',
          // width: '100%',
        }}>
        {!isErrorPage && <Sidebar />}

        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
