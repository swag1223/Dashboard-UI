import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <h1>Sidebar</h1>
      <ul>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="*">Tile2</Link>
        </li>
        <li>
          <Link to="/auth">Authentication</Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
