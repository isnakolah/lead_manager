import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  const onChange = e => setState({ [e.target.name]: e.target.value });

  const { username, password } = state;
  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Register</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={onChange}
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
