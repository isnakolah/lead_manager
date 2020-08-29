import React, { useState, setState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addLead } from "../../actions/leads";

const Form = props => {
  const [lead, setLead] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = ({ target }) =>
    setLead({ ...lead, [target.name]: target.value });

  const onSubmit = e => {
    e.preventDefault();
    const lead_add = { ...lead };
    props.addLead(lead_add);
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
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={onChange}
            value={lead.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={onChange}
            value={lead.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            className="form-control"
            onChange={onChange}
            value={lead.message}
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
