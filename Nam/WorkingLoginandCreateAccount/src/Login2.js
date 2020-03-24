import React, { Component } from "react";

import Axios from "axios";
// import { Link } from "react-router-dom";
// import "App.css";
/* eslint-disable */

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class CreateAcccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      formErrors: {
        userName: "",
        password: ""
      }
    };
  }

  // onSubmit = event => {
  //   event.preventDefault();
  //   console.log("onSubmit state", this.state);

  //   const { userName, password } = this.state;

  //   fetch(
  //     "https://8buon77sbf.execute-api.us-east-1.amazonaws.com/login",
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "text/html",
  //         "Content-Type": "application/x-www-form-urlencoded"
  //       },
  //       body: { userName, password }
  //     }
  //   );
  // };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "userName":
        formErrors.userName =
          value.length < 2 ? "minimum 2 characters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  state = {
    selectedFile: null
  };
  fileSelectedHandler = event => {
    console.log(event.target.files[0]); //LOGS THE SELECTED FILE

    this.setState({
      //SELECTS THE FILE
      selectedFile: event.target.files[0]
    });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form
            className="account-form"
            onSubmit={this.handleSubmit}
            noValidate
            method="POST"
            action="https://8buon77sbf.execute-api.us-east-1.amazonaws.com/login"
          >
             <div className="userName">
              <label className="label" htmlFor="userName"></label>
              <input
                className={formErrors.userName.length > 0 ? "error" : null}
                placeholder="Username"
                type="text"
                name="userName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.userName.length > 0 && (
                <span className="errorMessage">{formErrors.userName}</span>
              )}
            </div>
            <div className="password">
              <label className="label" htmlFor="password"></label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="loginForm">
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    ); //return
  } //render
} //app component

export default CreateAcccountForm;
