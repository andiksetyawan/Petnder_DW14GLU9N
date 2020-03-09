import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Container,
  AppBar,
  Toolbar,
  //Button,
  Typography,
  //Link
} from "@material-ui/core";

import Login from './components/login'
import Register from './components/register'

const styles = theme => ({
  root: {
    textAlign: "center"
  },
  main: {
    backgroundImage:
      'url("/background.jpg")',
    height: "100vh",
    // minHeight: 200,
    backgroundSize: "cover"
  },
  mainbody: {
    margin: "40px 10% auto 10%",
    color: "#fff"
  },
  appbar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    textAlign:"left"
  },
  footer: {
    // textAlign: "center",
    fontStyle: "italic",
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    padding: 20
  },
  subtitle: {
    margin: "40px 20% auto 20%"
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.main}>
          <AppBar position="static" className={classes.appbar}>
            <Container maxWidth="md">
              <Toolbar>
                <Typography style={{ flexGrow: 1 }} variant="h5">
                  <b>Pet</b>nder
                </Typography>
                {/* <Button variant="contained" color="secondary">
                  Login
                </Button> */}
                <Login/>
              </Toolbar>
            </Container>
          </AppBar>
          <section className={classes.mainbody}>
            <Typography variant="h2">
              Swipe <b>Right.</b>
            </Typography>
            <Typography variant="h2">
              Make your pet <b>happy</b>
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              by clicking enter, you agree to{" "}
              <a color="inherit" href="#">
                our terms
              </a>
              . Learn how we process your data in our{" "}
              <a color="inherit" href="#">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a color="inherit" href="#">
                Cookie Policy
              </a>
            </Typography>
            <br />
            <Register/>
          </section>
        </div>
        <footer className={classes.footer}>
          <Typography variant="h3">FIND YOUR PET'S MATCH</Typography>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
