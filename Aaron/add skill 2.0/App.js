import React, { Component } from "react";


export class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "http://yourjavascript.com/1302804250/script.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <form className="form" id="myForm">
          <label htmlFor="skill" class="words">Add a skill to your profile</label><br />
          <input type="text" name="skill" id="skill" class="search" />
          <button type="submit" class="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default App;