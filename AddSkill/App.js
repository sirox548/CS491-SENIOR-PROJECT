import React from "react";
import "./App.css";
import AddSKills from "./addskills";

const styles = {
  app: {
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyItems: "center",
    alignItems: "center",
    display: "gird",
    height: "100vh",
    gridTemplateColumns: "1fr",
    fontFamily: "Arial",
    fontSize: 25,
    color: "rgba(0,0,100,1)",
  },
  select: {
    width: "100%",
    maxWidth: 600,
  },
};
///Options
const options = [
  {
    label: "SQL",
    value: "sql",
  },
  {
    label: "REACT JS",
    value: "Reactjs",
  },
  {
    label: "HTML",
    value: "html",
  },
  {
    label: "CSS",
    value: "css",
  },
  {
    label: "ORACLE DB",
    value: "oracle-db",
  },
  {
    label: "BOOSTRAP",
    value: "boostrap",
  },
  {
    label: "DATA STRUCTURES",
    value: "data-structures",
  },
  {
    label: "MICROSOFT EXCEL",
    value: "ms-excel",
  },
  {
    label: "MICROSOFT WORD",
    value: "ms-word",
  },
  {
    label: "TIME MANAGEMENT",
    value: "management",
  },
  {
    label: "MARKETING",
    value: "marketing",
  },
  {
    label: "SOCIAL MEDIA",
    value: "social-media",
  },
  {
    label: "BUSINESS ANALYST",
    value: "bs-analyst",
  },
  {
    label: "TEAMWORK",
    value: "teamwork",
  },
  {
    label: "C++",
    value: "c++",
  },
  {
    label: "MYSQL",
    value: "mysql",
  },
  {
    label: "RELATIONAL DATABASE",
    value: "RDB",
  },
  {
    label: "ORACLE DB",
    value: "ODB",
  },
  {
    label: "COMPLEX PROBLEM SOLVING",
    value: "PR",
  },
  {
    label: "OPERATIONS ANALYSIS",
    value: "operations-analyst",
  },
  {
    label: "QUALITY CONTROL ANALYSIS",
    value: "qualit-control-analyst",
  },
  {
    label: "COORDINATION",
    value: "cordination",
  },
  {
    label: "TROUBLESHOOTING",
    value: "troubleshooting",
  },
  {
    label: "SYSTEMS EVALUATION",
    value: "system-evaluation",
  },
  {
    label: "POSTGRES",
    value: "postgres",
  },
  {
    label: "SQLITE",
    value: "sqlite",
  },
];

//Listing
function onChangeInput(value) {
  console.log(value);
}

///================////
function App() {
  return (
    <div style={styles.app}>
      <AddSKills
        style={styles.select}
        isMulti={true}
        defaultValue={options[1]}
        onChange={onChangeInput}
        options={options}
        label="Choose related skills"
      />
    </div>
  );
}

export default App;
