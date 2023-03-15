import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

import URLS from '@constants/routes';

const Error404Page = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <h1>404 Page Not Found </h1>
      <Link className='links' to={URLS.DASHBOARD}>
        Go To Home
      </Link>
    </Box>
  );
};

export default Error404Page;
