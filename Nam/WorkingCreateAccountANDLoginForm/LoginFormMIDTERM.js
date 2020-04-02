import React, { Component } from 'react'
import axios from 'axios'
import { render } from '@testing-library/react';
import { throws } from 'assert';
import "./App.css";

class LoginForm extends Component 
{
  constructor(props) {
    super(props);
    this.state = {password: ""};
    this.state = {userName: ""};

      }

      handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
      }

  onSubmit = event => {
    event.preventDefault();
    console.log("onSubmit state", this.state);
    alert('A form was submitted: ' + JSON.stringify(this.state));

    fetch('https://8buon77sbf.execute-api.us-east-1.amazonaws.com/login', 
    {
        method: 'post',
        headers: 
        {
        "Content-Type": "application/json; charset=utf-8" 
        },
        body: JSON.stringify(this.state)
  }).then(function(response) {
  console.log(response)
  return response.json();
  });

   event.preventDefault();

}

  //FORM DATA
  render() {
    
    return (
      <div className="wrapper">
        
        <div className="form-wrapper">
          <h1>Login</h1>
          
          <form
                onSubmit={this.onSubmit}

            className="account-form"
            >

            <div className="userName">
              <label className="label" htmlFor="userName"></label>
              <input
                placeholder="Username"
                type="text"
                name="userName"
                value={this.state.value}
                onChange={this.handleChange}
              />

            </div>
            <div className="password">
              <label className="label" htmlFor="password"></label>
              <input
                placeholder="Password"
                type="text"
                name="password"
                value={this.state.value}
                onChange={this.handleChange}
              />

            </div>

            <div className="loginAccount">
              <button type="submit">Submit</button>

            </div>
          </form>
        </div>
      </div>
    ); //return
  } //render
} //app component

export default LoginForm;
