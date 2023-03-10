import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from '@containers/Navbar';
import Sidebar from '@containers/Sidebar';

const Layout = () => {
  // TODO: SIDEBAE WILL  BE CONDITINALLY DISPLAYED: HANDLED IN PR:3
  return (
    <Box sx={{ maxWidth: '1300px', margin: '0 auto' }}>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Outlet />
      </div>
    </Box>
  );
};

export default Layout;
