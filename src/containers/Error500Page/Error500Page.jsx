import { URL } from '@constants/routesConstants';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Error500Page = () => {
  return (
    <>
      <h1>Error500Page</h1>
      <Link className='links' to={URL.DASHBOARD}>
        Go To Home
      </Link>
    </>
  );
};

export default Error500Page;
