import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import client1 from "../layouts/images/client1.PNG";
import client2 from "../layouts/images/client2.PNG";
import client3 from "../layouts/images/client3.PNG";

const useStyles = makeStyles(theme => ({
  background: {
    width: "100%",
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "0 auto"
  },
  heading: {
    paddingTop: "1em",
    textAlign: "center",
    fontWeight: "Bold",
    color: "#404040"
  },
  center: {
    textAlign: "center"
  },
  AvatarImg: {
    borderBottom: "1px solid 	#A9A9A9",
    color: "#fb0000",
    textAlign: "center"
  },
  recommendation: {
    width: "225px",
    color: "#373737",
    textAlign: "center"
  }
}));
export default function Testimonials() {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} className={classes.background}>
        <div className="testimonials">
          <h3 className={classes.heading}> Success stories from job seekers</h3>
          <Grid justify="space-around" container>
            <Grid item>
              <div className="avatar">
                <Avatar alt="" src={client3} className={classes.large} />
                <div>
                  <h3 className={classes.AvatarImg}>Aaron Alabi, Google</h3>
                  <p className={classes.recommendation}>
                    loremEsse aute nulla Lorem commodo aute aliqua qui ex
                    laboris deserunt.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid>
              <div className="avatar">
                <Avatar alt="" src={client2} className={classes.large} />
                <div>
                  <h3 className={classes.AvatarImg}>Nam Bo, Spotify</h3>
                  <p className={classes.recommendation}>
                    loremEsse aute nulla Lorem commodo aute aliqua qui ex
                    laboris deserunt.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid>
              <div className="avatar">
                <Avatar alt="" src={client1} className={classes.large} />
                <div>
                  <h3 className={classes.AvatarImg}>Iveth Contreras, icims</h3>
                  <p className={classes.recommendation}>
                    loremEsse aute nulla Lorem commodo aute aliqua qui ex
                    laboris deserunt.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}
