import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

import Input from "../common/Input";

const Register = ({ register, isAuthenticated, createMessage }) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = state;

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      createMessage({ passwordsNotMatch: "Passwords do not match" });
    } else {
      const newUser = { username, email, password };
      register(newUser);
    }
  };

  const onChange = ({ target }) =>
    setState({ ...state, [target.name]: target.value });

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Register</h2>
        <form onSubmit={onSubmit}>
          <Input
            label="Username"
            name="username"
            onChange={onChange}
            value={username}
          />
          <Input
            type="email"
            label="Email"
            name="email"
            onChange={onChange}
            value={email}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            onChange={onChange}
            value={password}
          />
          <Input
            type="password"
            label="Confirm Password"
            name="password2"
            onChange={onChange}
            value={password2}
          />
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
