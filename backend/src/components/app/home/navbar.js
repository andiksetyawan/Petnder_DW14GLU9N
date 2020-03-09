import React from "react";
import { withStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Match from "../../match";

const styles = theme => ({});

class Navbar extends React.Component {
  render() {
    // const { classes } = this.props;
    console.log("macth navbar paretn", this.props.matched);

    return (
      <React.Fragment>
        <Match matched={this.props.matched} />
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Navbar));
