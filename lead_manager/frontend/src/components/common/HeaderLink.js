import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeaderLink = ({ to, children }) => {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link">
        {children}
      </Link>
    </li>
  );
};

HeaderLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default HeaderLink;
