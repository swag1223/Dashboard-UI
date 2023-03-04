import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Error500Page() {
  return (
    <>
      <h1>Error500Page</h1>
      <Link className="links" to="/">
        Go To Home
      </Link>
    </>
  );
}

export default Error500Page;
