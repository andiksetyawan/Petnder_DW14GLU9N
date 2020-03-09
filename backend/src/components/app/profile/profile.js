import React from "react";
import { withStyles } from "@material-ui/core";

import { withRouter } from "react-router-dom";

import { Typography, Button } from "@material-ui/core";

import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";

const styles = theme => ({});

class Profile extends React.Component {
  render() {
    // const { classes } = this.props;
    return (
      <React.Fragment>
        <img
          style={{ width: "100%" }}
          alt="avatar"
          src={this.props.pet.data.photo}
        />
        <div style={{ padding: 20 }}>
          <div style={{ display: "flex" }}>
            <Typography style={{ flexGrow: 1 }} variant="h5">
              <b>{this.props.pet.data.name}</b>
            </Typography>
            <Typography color="tex" variant="h6">
              {this.props.pet.data.species.name}
            </Typography>
          </div>
          <div style={{ fontSize: 12 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <PersonOutlineRoundedIcon fontSize="small" />
              </div>
              <div>Breeder : {this.props.pet.data.user.name}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <LocationOnOutlinedIcon fontSize="small" />
              </div>
              <div>10 Km dari sini</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <PersonOutlineRoundedIcon fontSize="small" />
              </div>
              <div>Gender - {this.props.pet.data.gender}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <PhoneRoundedIcon fontSize="small" />
              </div>
              <div>Phone Breeder : {this.props.pet.data.user.phone}</div>
            </div>
          </div>
          <br />
          <Typography variant="h6">About Pet</Typography>
          <Typography variant="caption" color="">
            {this.props.pet.data.about_pet}
          </Typography>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Profile));
