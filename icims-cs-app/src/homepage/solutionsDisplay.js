import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(20),
      height: theme.spacing(16)
    }
  }
}));

export default function SolutionsDisplay() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>Solution</Paper>
      <Paper>Solution</Paper>
      <Paper>Solution</Paper>
    </div>
  );
}
