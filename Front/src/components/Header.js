import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className="header-link">
        <h2>HRnet</h2>
      </Link>
      <nav className="header-nav">
        <NavLink
          to="/employee-form"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Add
        </NavLink>
        <NavLink
          to="/employee-list"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          View
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
