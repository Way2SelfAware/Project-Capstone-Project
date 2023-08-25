import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // navbar
    <div className="navbar">
      {/* links */}
      <div className="links">
        {/* home */}
        <Link to="/">Shoppe</Link>
        {/* shopping cart page*/}
        <Link to="/cart"></Link>
        {/* user profile page */}
        <Link to="/profile"></Link>
      </div>
    </div>
  );
};

export default Navbar;
