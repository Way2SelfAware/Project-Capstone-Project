// react hooks
import React, { useState } from "react";
// my components
import Login from "../components/login";
import Register from "../components/register";
import Profile from "../components/profile";

const User = () => {
  // state management
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  // handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  // handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  //card flip
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="user-page">
      {/* check login status */}
      {isLoggedIn ? (
        <Profile />
      ) : (
        <>
          <div className={`card ${isFlipped ? "flipped" : ""}`}>
            <div className="card-inner">
              <div className="card-front">
                <Login onLogin={handleLogin} />
                <button onClick={handleFlip}>Switch to Register</button>
              </div>
              <div className="card-back">
                <Register onRegister={handleLogin} />
                <button onClick={handleFlip}>Switch to Login</button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* log out conditional */}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default User;
