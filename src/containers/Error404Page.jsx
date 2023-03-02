import React from 'react';
import { Link } from 'react-router-dom';

function Error404Page() {
  return (
    <>
      <h1>404 Page Not Found</h1>
      <Link className="links" to="/">
        Go To Home
      </Link>
    </>
  );
}

export default Error404Page;
