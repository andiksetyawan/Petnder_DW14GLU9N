import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Avatar, Typography, IconButton } from "@material-ui/core";

import { withRouter, Link } from "react-router-dom";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

const styles = () => ({
  avatar: {
    border: "2px solid #fff",
    marginRight: 10
  }
});

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: "Profile Pet"
    // };
  }
  changeTitle = val => {
    this.setState({
      title: val
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Link to="/home">
          <IconButton aria-label="expand" color="inherit">
            <ArrowBackIosRoundedIcon />
          </IconButton>
        </Link>
        <Avatar
          className={classes.avatar}
          //   style={{ border: "2px solid #fff", marginRight: 10 }}
          alt="Remy Sharp"
          src={this.props.pet.data.photo}
        />
        {/* <Typography variant="h6">Profile Pet</Typography> */}
        {/* <Typography variant="h6">
          {this.state.title ? this.state.title : "Profile Pet"}
        </Typography> */}
        <Typography variant="h6">
          {this.props.title}
          {/* sds */}
        </Typography>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(HeaderBar));
