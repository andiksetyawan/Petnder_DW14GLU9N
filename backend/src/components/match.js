import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import breeds from "../data/breeds.json";

import { connect } from "react-redux";

const styles = theme => ({
  root: {
    display: "flex",

    //height: "auto",
    maxHeight: "100%",
    overflow: "auto",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    "& div": {
      // minWidth:80,
      // maxWidth:110,
      position: "relative",
      textAlign: "center",
      color: "white",
      height: 160,
      width: 125,
      margin: 7,
      backgroundColor: "gray",
      borderRadius: 10,
      "& img": {
        width: "100%",
        height: "100%",
        borderRadius: 10
      },
      "& section": {
        position: "absolute",
        bottom: 0,
        // left: 10,
        textAlign: "left",
        // paddingLeft: 5,
        width: "100%",
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0))",
        // background:"linear-gradient(red, yellow)",
        borderRadius: "0px 0px 10px 10px",
        "& h6": {
          paddingLeft: 10
        }
        //top: 0
      }
    }
  }
});

class Match extends React.Component {
  render() {
    const { classes, match, pet, pets } = this.props;

    return (
      <div className={classes.root}>
        {match &&
          match.data.map((item, index) => {
            console.log("---",item.pet.id ,"===", pet.data.id)
            if (item.pet.id === pet.data.id) {
              return (
                <div
                  key={index}
                  onClick={() => alert("clickedx")}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.pet_liked.photo} alt={item.pet_liked.name} />
                  <section>
                    <Typography variant="subtitle2">
                      <b>{item.pet_liked.name}</b>
                    </Typography>
                  </section>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  onClick={() => alert("clickedx")}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.pet.photo} alt={item.pet.name} />
                  <section>
                    <Typography variant="subtitle2">
                      <b>{item.pet.name}</b>
                    </Typography>
                  </section>
                </div>
              );
            }
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pet: state.pet,
    pets: state.pets,
    auth: state.auth,
    match: state.match
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Match));
