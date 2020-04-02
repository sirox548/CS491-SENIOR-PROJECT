import React, { Component } from "react";

export class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "http://yourjavascript.com/722803554/addskills.js";
    script.async = true;
    document.body.appendChild(script);
  }


  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: "\n        input[type=submit] {\n            background-color: rgb(226, 17, 17);\n            border: none;\n            color: rgb(255, 255, 255);\n            padding: 6px 6px;\n            text-decoration: none;\n            margin: 4px 2px;\n            cursor: pointer;\n        }\n\n        .dropdown-submenu {\n            position: relative;\n        }\n\n        .dropdown-submenu .dropdown-menu {\n            top: 0;\n            left: 100%;\n            margin-top: -1px;\n        }\n\n\n        .modal-content {\n            overflow-y: visible;\n            overflow: visible;\n        }\n    " }} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <button id="myBtn2" type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal2">ADD
        SKILLS</button>
        <div id="myModal2" className="modal fade" role="dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add an aquirred skill below</h4>
            </div>
            <div className="modal-body">
              <h3>Aquried skills</h3>
              <p>
                please select an Skill which you are confident enoguh to display.
                Please not you will need to add one at a time inorder to properly add it to your profile.
            </p>
              <form action method="get">
                <input list="skill" name="skills" />
                <datalist id="skill">
                  <option value="other 3">
                  </option><option value="other 4">
                  </option><option value="other 5">
                  </option></datalist>
                <input type="submit" />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">
                Close
            </button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default App;
