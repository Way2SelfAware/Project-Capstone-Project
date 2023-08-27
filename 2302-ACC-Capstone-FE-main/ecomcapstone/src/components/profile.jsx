import React from "react";
import { useState, useEffect } from "react";

const Profile = () => {
  // // state management
  // const [user, setUser] = useState();

  // //    fectch logic for user data will go here
  // useEffect(() => {});
  return (
    <>
      <div className="profile-page">
        <h1>User Profile</h1>
        {/* user profile pic */}
        <div>
          {user.profilePicture && (
            <img
              src={user.profilePicture}
              alt={`${user.name}'s Account`}
              className="profile-picture"
            />
          )}
          {/* user pic upload */}
          <input type="file" accept="image/*" />
        </div>
        {/* display user info */}
        <p className="profile-user-data">
          <strong>Name:</strong> {user.name}
          <br />
          <strong>Email:</strong> {user.email}
          <br />
          <strong>Address:</strong> {user.address}
        </p>
      </div>
    </>
  );
};

export default Profile;
