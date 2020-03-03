import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n          input[type="text"] {\n            width: 130px;\n            box-sizing: border-box;\n            border: 2px solid #ccc;\n            border-radius: 4px;\n            font-size: 16px;\n            background-color: white;\n            background-image: url("searchicon.png");\n            background-position: 10px 10px;\n            background-repeat: no-repeat;\n            padding: 12px 20px 12px 40px;\n            -webkit-transition: width 0.4s ease-in-out;\n            transition: width 0.4s ease-in-out;\n          }\n    \n          input[type="text"]:focus {\n            width: 100%;\n          }\n        '
          }}
        />
        <form>
          <input type="text" name="search" placeholder="Search.." />
        </form>
        <div className="content">
          <label htmlFor="filters">experince level</label>
          <select id="filters">
            <option value="Entry">Entry Level</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior Level</option>
            <option value="Mangment">Mangment</option>
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
            <option value="Tech">Central New Jersey </option>
            <option value="HealthCare">Northan New Jersey </option>
            <option value="Finance">Southern New Jersey </option>
          </select>
        </div>
      </div>
    );
  }
}

export default App;
