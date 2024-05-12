import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  
  return (
    <div className="container">
      <div className="form-container ">
        <h2 className="text-center mb-4">Log in</h2>
        <form className="m-auto">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control w-50"
              id="email"
              name="email"
              onChange={handleEmail}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control w-50"
              id="password"
              name="password"
              onChange={handlePassword}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger btn-block w-50 m-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
