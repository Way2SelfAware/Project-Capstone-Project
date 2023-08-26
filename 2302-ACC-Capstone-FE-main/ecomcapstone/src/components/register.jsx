// react hooks
import React from "react";

const Register = () => {
  return (
    <>
      <div className="register-form">
        <form>
          <input type="Username" placeholder="Username"></input>
          <input type="Password" placeholder="Password"></input>
          <input type="Email" placeholder="Email"></input>
          <input type="EmailConfirmation" placeholder="Confirm Email"></input>
          <input type="Name" placeholder="Full Name"></input>
          <input type="Address" placeholder="Address"></input>
          <button className="register-btn" onClick={registerSubmit}>Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
