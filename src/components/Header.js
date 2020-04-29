import React from "react";


export default class Header extends React.Component {
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
          <label htmlFor="skill" className="words">Add a skill to your profile</label><br />
          <input type="text" name="skill" id="skill" className="search" />
          <button type="submit" className="submit">Submit</button>
        </form>
      </div >
    );
  }

}
