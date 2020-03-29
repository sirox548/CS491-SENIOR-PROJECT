import React, { Component }  from 'react';


class NameForm extends React.Component 

{
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.state = { userName: '' };
  
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    // this.setState({[event.target.password]: event.target.value});

  }

  handleSubmit = (event) => {
    alert('A form was submitted: ' + JSON.stringify(this.state));

    fetch('https://8buon77sbf.execute-api.us-east-1.amazonaws.com/login', {
        method: 'POST',
        // mode: 'cors',
        headers: {
                  Accept: "text/html",
                  // "Accept":"application/json",
                  // "Content-Type": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                    // "Content-Type": "text/plain",

                },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.value} name="userName" onChange={this.handleChange} />
        </label>
        <div>
        <label>
          Password:
          <input type="text" value={this.state.value} name="password" onChange={this.handleChange} />
        </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
