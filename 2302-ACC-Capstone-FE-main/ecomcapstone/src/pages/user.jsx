// react hooks
import React, { useState } from "react";
// my components
import Login from "../components/login";
import Register from "../components/register";
import Profile from "../components/profile";

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // You would typically have an authentication check here, which sets the isLoggedIn state

  return (
    <div className="user-page">
      <h1>User Profile</h1>
      {isLoggedIn ? (
        // If user is logged in, show the user profile
        <Profile />
      ) : (
        // If user is not logged in, show login and registration forms
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
};

export default User;
