// react hooks
import React from "react";
// my components
import Login from "../components/login";
import Register from "../components/register";
import Profile from "../components/profile";

const Profile = () => {
  return (
    <>
      <div className="user-page">
        <h1>Login</h1>
        {/* create conditionals for login display */}
        <Login />
        {/* create conditionals for registation display */}
        <Register />
        {/* create conditionals for profile page display */}
        <Profile />
      </div>
    </>
  );
};

export default Profile;
