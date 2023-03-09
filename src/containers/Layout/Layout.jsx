import { URL } from '@constants/routesConstants';
import Navbar from '@containers/Navbar/Navbar';
import Sidebar from '@containers/Sidebar';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const theme = useTheme();
  const location = useLocation();

  console.log(location);
  const currentRoute = location.pathname;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // console.log(isMobile);

  const isErrorPage = !Object.values(URL).includes(currentRoute);
  console.log(isErrorPage);

  const shouldApplyMarginLeft = !isMobile && !isErrorPage;
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          width: '100%',
        }}>
        {!isErrorPage && <Sidebar />}
        <Box
          sx={{
            marginLeft: shouldApplyMarginLeft ? '300px' : 0,
            marginTop: '64px',
          }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
