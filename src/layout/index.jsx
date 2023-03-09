import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '@containers/Navbar';
// import Sidebar from '@containers/Sidebar';
import { Box } from '@mui/material';

const Layout = ({ component }) => {
  // const theme = useTheme();
  // const location = useLocation();
  // const pathname = location.pathname.split('/');

  // console.log(location);
  // console.log(pathname);
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ maxWidth: '1300px', margin: '0 auto' }}>
      <Navbar />
      <div style={{ display: 'flex' }}>
        {component}
        <Outlet />
      </div>
    </Box>
  );
};

Layout.propTypes = {
  component: PropTypes.element.isRequired,
};

// Layout.defaultProps = {
//   showSideBar: false,
// };
export default Layout;
