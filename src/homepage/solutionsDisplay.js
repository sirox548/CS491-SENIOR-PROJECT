import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",

    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(4),
      width: theme.spacing(35),
      height: theme.spacing(20)
    }
  },
  solution: {
    PaddingTop: "2em"
  },
  comingSoon: {
    color: "#fb0000"
  },
  title: {
    textAlign: "center",
    color: "#404040"
  }
}));

export default function SolutionsDisplay() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h2 className={classes.title}>
        Addressing Lack of Transparency in Job Search with
      </h2>
      <div className={classes.root}>
        <Paper className={classes.solution}>
          <h3>Percentage match</h3>
        </Paper>
        <Paper className={classes.solution}></Paper>
        <Paper className={classes.solution}>
          <h3>Machine learning</h3>
          <p className={classes.comingSoon}>coming soon</p>
        </Paper>
      </div>
    </React.Fragment>
  );
}
