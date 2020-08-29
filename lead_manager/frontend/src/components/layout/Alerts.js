import React, { useEffect } from "react";
import { withAlert } from "react-alert";

const Alerts = props => {
  useEffect(() => {
    props.alert.show("It works");
  });
  return <></>;
};

export default withAlert()(Alerts);
