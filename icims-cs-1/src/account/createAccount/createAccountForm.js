import React, { Component } from "react";

import Axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
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
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Username: ${this.state.userName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 2 ? "minimum 2 characters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "minimum 2 characters required" : "";
        break;
      case "userName":
        formErrors.userName =
          value.length < 2 ? "minimum 2 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
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
  fileUploadHandler = () => {
    //UPLOADING THE SELECTED FILE USING FORM DATA
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    Axios.post("", fd, {
      //LOCATION TO POST TO (place location between quotes)
      onUploadProgress: progressEvent => {
        console.log(
          "Image Upload Progress: " +
            Math.round((progressEvent.loaded / progressEvent.total) * 100) +
            "%"
        );
      }
    }).then(res => {
      console.log(res);
    });
  };
  //FORM DATA
  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create an Account</h1>
          <form
            className="account-form"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <div className="firstName">
              <label htmlFor="firstName"></label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName"></label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="userName">
              <label htmlFor="userName"></label>
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
            <div className="email">
              <label htmlFor="email"></label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password"></label>
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
            <div className="App">
              <small>Upload Profile Image</small>
              <div></div>
              <input
                type="file"
                onChange={this.fileSelectedHandler} //PICKING AN IMAGE
                ref={fileInput => (this.fileInput = fileInput)}
              />
              {/* <button onClick={() => this.fileInput.click()}>Pick File</button> */}
              <button onClick={this.fileUploadHandler}> Upload </button>
            </div>
            ;
            <div className="createAccount">
              <button type="submit">Continue</button>
              <small>
                Already have an account?
                <Link to="/login">
                  <a> Sign in</a>
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    ); //return
  } //render
} //app component

export default CreateAcccountForm;
