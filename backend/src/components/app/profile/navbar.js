import React from "react";
import { withStyles } from "@material-ui/core";

import {
  Typography,
  Link,
  Divider,
  FormControl,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";

import { withRouter } from "react-router-dom";

import PrettoSlider from "../../slider";

import { connect } from "react-redux";
import { logout } from "../../../_actions/auth";
import { removePet } from "../../../_actions/pet";
import { resetPayment } from "../../../_actions/payment";

const styles = theme => ({});

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 4
    };
  }
  handleIsProfile = e => {
    alert("clik");
    this.setState({
      isProfile: !this.state.isProfile
    });
  };

  handleLogout = e => {
    // this.props.history.push("/");
    this.props.logout();
  };

  render() {
    // const { classes } = this.props;
    return (
      <div style={{ padding: 10 }}>
        <Typography variant="h6">
          <b>Account Setting</b>
        </Typography>

        <div
          style={{
            backgroundColor: "rgb(220, 220, 220)",
            padding: 10,
            borderRadius: 10,
            marginTop: 10
          }}
        >
          <div style={{ display: "flex", margin: 10 }}>
            <div style={{ flexGrow: 1 }}>Email</div>
            <div>{this.props.user.data.email}</div>
          </div>

          <Divider />
          <div style={{ display: "flex", margin: 10 }}>
            <div style={{ flexGrow: 1 }}>Phone</div>
            <div>{this.props.user.data.phone}</div>
          </div>
        </div>
        <br />

        <Typography variant="h6">
          <b>Discovery Setting</b>
        </Typography>

        <div
          style={{
            backgroundColor: "rgb(220, 220, 220)",
            padding: 10,
            //height: 100,
            borderRadius: 10,
            marginTop: 10
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }}>Maximum Distance</div>
            <div>{this.state.distance}km</div>
          </div>
          <PrettoSlider
            onChange={(event, value) => this.setState({ distance: value })}
            max="10"
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={this.state.distance}
          />

          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }}>Age</div>
            {/* <div>10km</div> */}
          </div>
          <FormControl
            margin="dense"
            variant="filled"
            style={{ width: "100%" }}
          >
            {/* <InputLabel id="select-spesies">Spesies Pet</InputLabel> */}
            <Select
              labelId="select-spesies-label"
              id="select-spesies"
              value="2"
              onChange={e => this.setState({ selectedSpesies: e.target.value })}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
            </Select>
          </FormControl>

          <div style={{ display: "flex", marginTop: 15 }}>
            <div style={{ flexGrow: 1 }}>Gender</div>
          </div>
          <FormControl
            margin="dense"
            variant="filled"
            style={{ width: "100%" }}
          >
            {/* <InputLabel id="select-spesies">Spesies Pet</InputLabel> */}
            <Select
              labelId="select-spesies-label"
              id="select-spesies"
              value="Male"
              onChange={e => this.setState({ selectedSpesies: e.target.value })}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* END DUMMY */}
        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <Button
              style={{ borderRadius: 20, margin: "20px 0" }}
              size="large"
              variant="contained"
              color="secondary"
              onClick={this.handleLogout}
            >
              Logout
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(removePet()); //resetPet
      dispatch(resetPayment());
      dispatch(logout());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Navbar)));
