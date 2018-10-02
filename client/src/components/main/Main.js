import React, { Component } from 'react';
import Login from "./login/Login";
import "./Main.css"

class Main extends Component {

  render() {
    return (
      <div className="main-content">
        <Login />
      </div>
    );
  }
}

export default Main;
