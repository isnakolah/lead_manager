import React, { useState, setState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addLead } from "../../actions/leads";

import Input from "../common/Input";

const Form = ({ addLead }) => {
  const [lead, setLead] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = lead;

  const onChange = ({ target }) =>
    setLead({ ...lead, [target.name]: target.value });

  const onSubmit = e => {
    e.preventDefault();
    addLead({ ...lead });
    setLead({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Lead</h2>
      <form onSubmit={onSubmit}>
        <Input label="Name" name="name" onChange={onChange} value={name} />
        <Input label="Email" name="email" onChange={onChange} value={email} />
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            className="form-control"
            onChange={onChange}
            value={message}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  addLead: PropTypes.func.isRequired,
};

export default connect(null, { addLead })(Form);
