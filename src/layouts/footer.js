import React from "react";
import CSLogo from "./images/CSLogo.png";
import icimslogo from "./images/icimslogo.png";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    width: "100%",
    background: "#ababab",
    padding: "1em"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.footer}>
        <Link to="/" exact>
          <img src={CSLogo} alt="CSLogo" height="60px" className="logo logo1" />
        </Link>
        <Link to="/" exact>
          <img src={icimslogo} alt="CSLogo" height="65px" className="logo" />
        </Link>
      </div>
    </div>
  );
}
