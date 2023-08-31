// react hooks
import React from "react";
import { useState } from "react";

const Login = (props) => {
  // state Managment
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //handle change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // onClick login handler
  const loginSubmit = (event) => {
    event.preventDefault();
    // form validation
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password");
      return;
    }
    // API CALL location for future integration
    // export const userLogin = "https://fakestoreapi.com/auth/login";
    // add token authentication for future integration
    // reset form
    setUsername("");
    setPassword("");

    // execute loginSubmit
    props.onLogin();
  };

  return (
    <>
      <div className="login-form">
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
          <button className="login-btn" onClick={loginSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
