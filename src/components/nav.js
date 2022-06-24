import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/notice">Notice</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
