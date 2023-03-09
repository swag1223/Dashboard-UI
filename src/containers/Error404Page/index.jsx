// import URL from '@constants/routesConstants';
import React from 'react';
import { Link } from 'react-router-dom';
import URL from '@constants/routes';

const Error404Page = () => {
  return (
    <>
      <h1>404 Page Not Found </h1>
      <Link className='links' to={URL.DASHBOARD}>
        Go To Home
      </Link>
    </>
  );
};

export default Error404Page;
