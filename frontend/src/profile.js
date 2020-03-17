import React from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import HeaderBar from "./components/app/profile/headerbar";
import Navbar from "./components/app/profile/navbar";
import Main from "./components/app/profile/main";

//import {} from "./_actions/auth"
import { connect } from "react-redux";
import { getPayment } from "./_actions/payment";

//import { Redirect } from "react-router-dom";

const styles = theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    minHeight: 40,
    padding: 10,
    color: "#fff"
  },

  main: {
    backgroundImage: "url('tile.png')",
    height: "100%",
    maxHeight: "100%",
    width: "100%",
    backgroundRepeat: "repeat",
    backgroundSize: "450px 700px"
    // "&:before":{
    //     opacity: "0.1"
    // }
  }
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navtitle: "Profile Pet"
    };
  }

  changeTitle = val => {
    // alert("wkowwoksss"+val);
    this.setState({ navtitle: val });
  };

  componentDidMount() {
    this.props.getPayment();
  }

  render() {
    const { classes, pet, pets, auth, user } = this.props;
    console.log("pet profile", pet);
    //if (this.props.auth.authenticated) return <Redirect to="/" />;
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 3, height: "100vh", overflow: "hidden" }}>
          <div
            style={{
              maxHeight: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div className={classes.header}>
              {/* <HeaderBar /> */}
              <HeaderBar pet={pet} title={this.state.navtitle} />
            </div>
            <br />
            <div style={{ overflowY: "auto" }}>
              <Navbar user={user} pet={pet} />
            </div>
          </div>
        </div>
        <div style={{ flex: 7, height: "100vh", overflow: "auto" }}>
          <div className={classes.main}>
            <Main user={user} onTitle={this.changeTitle} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    pet: state.pet,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPayment: () => dispatch(getPayment())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Profile)));
