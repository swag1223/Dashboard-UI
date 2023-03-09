import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import URL from '@constants/routes';

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
