// react hooks
import React from "react";

const Register = () => {
  return (
    <>
      <div className="register-form">
        <form>
          <input type="Username" placeholder="Username"></input>
          <input type="Password" placeholder="Password"></input>
          <button className="register-btn">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
