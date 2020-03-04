import React, { Component } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import CSLogo from "./images/CSLogo.png";
import icimslogo from "./images/icimslogo.png";
import Grid from "@material-ui/core/Grid";
import { Button, AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./index.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <StylesProvider injectFirst>
          <AppBar position="static">
            <Toolbar>
              <Grid container justify="space-between">
                <Grid item>
                  <div>
                    <img
                      src={CSLogo}
                      alt="CSLogo"
                      height="60px"
                      className="logo logo1"
                    />

                    <img
                      src={icimslogo}
                      alt="CSLogo"
                      height="65px"
                      className="logo"
                    />
                  </div>
                </Grid>

                <Grid item>
                  <div>
                    <Link to="/login">
                      <Button>Sign In</Button>
                    </Link>

                    <Link to="/create-account">
                      <Button variant="contained">create account</Button>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </StylesProvider>
      </div>
    );
  }
}

export default Header;
