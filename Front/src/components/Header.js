import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className="header-link">
        <h2>HRnet</h2>
      </Link>
      <nav className="header-nav">
        <Link to="/employee-form" className="nav-link">
          Add
        </Link>
        <Link to="/employee-list" className="nav-link">
          View
        </Link>
      </nav>
    </header>
  );
};

export default Header;
