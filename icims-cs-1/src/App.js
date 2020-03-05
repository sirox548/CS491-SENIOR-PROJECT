import React, { Component } from "react";
import Home from "./homepage/home";
import CreateAccount from "./account/createAccount/createAccount";
import Profile from "./profile/profile";
import Login from "./account/login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./search/searchPage";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact strict component={Home} />
            <Route path="/profile" exact strict component={Profile} />
            <Route
              path="/create-account"
              exact
              strict
              component={CreateAccount}
            />
            <Route path="/login" exact strict component={Login} />
            <Route path="/search" exact strict component={Search} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
