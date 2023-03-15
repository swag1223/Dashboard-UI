import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

import URLS from '@constants/routes';

const Error500Page = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Error500Page</h1>
      <Link className='links' to={URLS.DASHBOARD}>
        Go To Home
      </Link>
    </Box>
  );
};

export default Error500Page;
