// react hooks
import React from "react";
import { useState } from "react";

const Register = (props) => {
  // state Managment
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  //handle change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  // onClick login handler
  const registerSubmit = (event) => {
    event.preventDefault();
    // form validation
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      email.trim() === "" ||
      emailConfirmation.trim() === "" ||
      name.trim() === "" ||
      address.trim() === ""
    ) {
      alert("Please enter both username and password");
      return;
    }
    // API CALL location for future integration
    // add token authentication for future integration

    // reset form
    setUsername("");
    setPassword("");
    setEmail("");
    setName("");
    setAddress("");

    // execute registerSubmit
    props.onRegister();
  };

  return (
    <>
      <div className="register-form">
        <form>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Full Name"
          />
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Address"
          />
          <button className="register-btn" onClick={registerSubmit}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
