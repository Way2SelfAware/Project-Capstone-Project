// react hooks
import React, { useState } from "react";
// my components
import Login from "../components/login";
import Register from "../components/register";
import Profile from "../components/profile";

const App = () => {
  // state management
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  // handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="user-page">
      {/* check login status */}
      {isLoggedIn ? (
        <Profile />
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <Register onRegister={handleLogin} />
        </>
      )}
      {/* log out conditional */}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default App;
