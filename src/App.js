import React from "react";
import Home from "./homepage/home";
import CreateAccount from "./account/createAccount/createAccount";
import Profile from "./profile/profile";
import Login from "./account/login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "./App.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/create-account" exact component={CreateAccount} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
