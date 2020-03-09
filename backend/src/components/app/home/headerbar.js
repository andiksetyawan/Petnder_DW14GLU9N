import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Avatar, Typography, IconButton } from "@material-ui/core";

import { withRouter, Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { connect } from "react-redux";
import { setPet } from "../../../_actions/pet";
import { getMatch } from "../../../_actions/match";

const styles = () => ({
  avatar: {
    border: "2px solid #fff",
    marginRight: 10
  }
});

class HeaderBar extends React.Component {
  state = {
    pet: 0,
    open: false,
    anchorEl: null
  };
  render() {
    const { classes, pet, pets } = this.props;
    //const data = pet.data[0];
    // console.log("current petxxx", pet);
    //console.log("pet header", PageTransitionEvent);
    return (
      <React.Fragment>
        <Link to="/profile">
          <Avatar
            className={classes.avatar}
            style={{}}
            alt="Remy Sharp"
            src={pet.data.photo}
          />
        </Link>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={e => this.setState({ anchorEl: e.currentTarget })}
        >
          <Typography variant="h6" style={{ color: "#fff" }}>
            {pet.data.name}
          </Typography>
          <ExpandMoreIcon style={{ color: "#fff" }} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={() => this.setState({ anchorEl: null })}
        >
          {pets.data.map((item, i) => {
            return (
              <MenuItem
                key={i}
                onClick={e => {
                  this.setState({ anchorEl: null });
                  console.log("etarget", i);
                  // this.props.setdata(pet.data[i]);
                  console.log("id pet", pets.data[i].id);
                  this.props.setPet(pets.data[i]);
                  this.props.getMatch(pets.data[i].id);
                }}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </Menu>
        {/* <Typography variant="h6">{pet.data.name}</Typography>
        <Link to="/">
          <IconButton aria-label="expand" color="inherit" onClick={() => {}}>
            <ExpandMoreIcon />
          </IconButton>
        </Link> */}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPet: data => dispatch(setPet(data)),
    getMatch: pet_id => dispatch(getMatch(pet_id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(HeaderBar)));
