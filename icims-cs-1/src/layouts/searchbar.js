import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n          input[type="text"] {\n            width: 400px;\n            box-sizing: border-box;\n  margin:7em 0 .5em 0;\n          border: 2px solid #ccc;\n            border-radius: 4px;\n            font-size: 16px;\n            background-color: white;\n            background-image: url("searchicon.png");\n            background-position: 10px 10px;\n            background-repeat: no-repeat;\n            padding: 16px 20px 16px 40px;\n            -webkit-transition: width 0.4s ease-in-out;\n            transition: width 0.4s ease-in-out;\n          }\n    \n          input[type="text"]:focus {\n            width: 70%;\n  outline:none \n'
          }}
        />
        <form>
          <input type="text" name="search" placeholder="Search.." />
        </form>
        <div>
          <label className="content" htmlFor="filters">
            experience level
          </label>
          <select id="filters">
            <option value="Entry">Entry Level</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior Level</option>
            <option value="Mangment">Mangement</option>
          </select>
          <label htmlFor="filters">Industry</label>
          <select id="Industry">
            <option value="Tech">Tech</option>
            <option value="HealthCare">HealthCare</option>
            <option value="Finance">Finance</option>
            <option value="Transportation">Transportation</option>
          </select>
          <label htmlFor="filters">General Location</label>
          <select id="Location">
            <option value="central New Jersey">Central New Jersey </option>
            <option value="Northen New Jersey">Northern New Jersey </option>
            <option value="Finance">Southern New Jersey </option>
          </select>
        </div>
      </div>
    );
  }
}

// export default withStyles(useStyles)(SearchBar);

export default SearchBar;
