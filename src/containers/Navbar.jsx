import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <h1>Nav</h1>
      <ul>
        <li>
          <Link to="*">Notification</Link>
        </li>
        <li>Avatar</li>
      </ul>
    </>
  );
}

export default Navbar;
