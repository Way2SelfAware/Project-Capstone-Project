import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // navbar
    <div className="navbar">
      {/* links */}
      <div className="links">
        {/* home */}
        <Link to="/">Shop</Link>
        {/* shopping cart page*/}
        <Link to="/cart">Cart</Link>
        {/* user profile page */}
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;
