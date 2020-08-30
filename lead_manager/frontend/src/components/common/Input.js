import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, onChange, name, value, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type ? type : "text"}
        name={name}
        className="form-control"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
