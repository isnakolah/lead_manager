import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return <h1>React App</h1>;
  }
}

render(<App />, document.querySelector("#app"));
