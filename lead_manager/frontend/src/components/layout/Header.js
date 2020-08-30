import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";
import HeaderLink from "../common/HeaderLink";

const Header = ({ auth, logout }) => {
  const { isAuthenticated, user } = auth;

  const authLinks = (
    <>
      <span className="navbar-text mr-3">
        <strong>{user ? `Welcome ${user.username}` : ""}</strong>
      </span>
      <li className="nav-item">
        <button
          className="nav-link btn btn-info btn-sm text-light"
          onClick={logout}
        >
          Logout
        </button>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <HeaderLink to="/register">Register</HeaderLink>
      <HeaderLink to="/login">Login</HeaderLink>
    </>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Lead Manager
          </a>
        </div>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
