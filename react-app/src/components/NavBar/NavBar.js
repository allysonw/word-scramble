import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink className="nav-link" to="/" >
        Home
      </NavLink>

      <NavLink className="nav-link" to="/play">
        Play
      </NavLink>

      <NavLink className="nav-link nav-link-right" to="/high-scores">
       High Scores
      </NavLink>
    </div>
  );
}

export default NavBar;
