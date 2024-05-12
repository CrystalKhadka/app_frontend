import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="form-container ">
        <h2 className="text-center mb-4">Log in</h2>
        <form className="m-auto">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-danger btn-block w-50">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
