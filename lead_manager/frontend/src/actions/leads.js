import axios from "axios";

import { createMessage, returnErrors } from "./messages";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
import { tokenConfig } from "./auth";

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/leads/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE LEAD
export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// ADD LEAD
export const addLead = lead => dispatch => {
  axios
    .post("/api/leads/", lead)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
