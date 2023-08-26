// react hooks
import React from "react";
// my components
import Login from "../components/login";
import Register from "../components/register";

const Profile = () => {
  return (
    <>
      <div className="profile-page">
        <h1>Login</h1>
        {/* create conditionals for login status */}
        <Login />
        {/* create conditionals for registation status */}
        <Register />
      </div>
    </>
  );
};

export default Profile;
