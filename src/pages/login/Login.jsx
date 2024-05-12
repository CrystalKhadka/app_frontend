import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  var validate = () => {
    var isValid = true;

    // validate the first name

    if (email.trim() === "") {
      setEmailError("EMail is required");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var isValidated = validate();
    if (!isValidated) {
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    console.log(data);
  };

  return (
    <div className="container">
      <div className="form-container ">
        <h2 className="text-center mb-4">Log in</h2>
        <form className="m-auto">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleEmail}
              required
            />
            {emailError && <p className="text-danger">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handlePassword}
              required
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}

            <button
              type="submit"
              className="btn btn-danger btn-block w-50 mt-5"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
