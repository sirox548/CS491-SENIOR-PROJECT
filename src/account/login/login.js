import React, { Component } from "react";
import Header from "../../layouts/header";
import LoginForm from "./LoginForm";

export class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LoginForm />
      </React.Fragment>
    );
  }
}

export default Login;
