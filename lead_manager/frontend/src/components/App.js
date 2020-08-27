import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <Header />;
          <div className="container">
            <Dashboard />
          </div>
        </>
      </Provider>
    );
  }
}

render(<App />, document.querySelector("#app"));
