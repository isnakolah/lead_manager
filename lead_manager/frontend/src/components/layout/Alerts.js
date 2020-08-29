import React, { Component, useEffect } from "react";
import { withAlert } from "react-alert";

export const Alerts = props => {
  useEffect(() => {
    props.alert.show("It works");
  });
  return <></>;
};

export default withAlert(Alerts);
