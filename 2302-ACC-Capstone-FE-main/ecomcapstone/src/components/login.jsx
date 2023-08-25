// react hooks
import React from "react";

const Login = () => {
  return (
    <>
      <div className="login-form">
        <form>
          <input type="Username" placeholder="Username"></input>
          <input type="Password" placeholder="Password"></input>
          <button className="login-btn">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
