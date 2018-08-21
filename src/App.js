import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Link } from "react-router-dom";

import routes from "./routes.js";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Link to="/">
            <h1>Numero Uno</h1>
          </Link>
          <Link to="/r2d2">
            <h1>Numero Dos</h1>
          </Link>
          <Link to="/r3d3">
            <h1>Numero Tres</h1>
          </Link>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
