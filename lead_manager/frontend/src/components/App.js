import React, { useEffect } from "react";
import { render } from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router>
          <>
            <Header />
            <Alerts />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </>
        </Router>
      </AlertProvider>
    </Provider>
  );
};

render(<App />, document.querySelector("#app"));
