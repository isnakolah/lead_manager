import React, { Component } from "react";
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

import { Provider } from "react-redux";
import store from "../store";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                </Switch>
              </div>
            </>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

render(<App />, document.querySelector("#app"));
