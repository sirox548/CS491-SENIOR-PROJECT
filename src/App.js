import React, { Component } from "react";
import "./App.css";

//Resume Component
class uploadResume extends Component {
  handleUpload = event => {
    alert("Upload was successful!");
  };

  handleInputChange = () => {};
  render() {
    return (
      <div className="wrapper">
        <div className="form-werapper">
          <h3>Upload resume</h3>
          <form Submit={this.handleSubmit} onValidate>
            <input type="file" name="file" />
            <div>
              <button onClick={this.handleUpload}> Upload</button>
            </div>
            <fieldset className="refs">
              <legend>
                <h3>Add References</h3>
              </legend>
              <p>Current Position or Previous Employer</p>
              <p>
                <input
                  type="text"
                  placeholder="Name of reference"
                  name="name"
                  onValidate
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <input type="number" placeholder="Contact Number" />
              </p>
              <p>
                <input type="email" placeholder="Email../optional" />
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default uploadResume;
