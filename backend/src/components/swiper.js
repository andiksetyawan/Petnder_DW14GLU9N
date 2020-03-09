import React, { useState } from "react";
import "./swiper.css";
import TinderCard from "react-tinder-card";
import { Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { getPetsMatch } from "../_actions/pets_match";

import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";

class Swiper extends React.Component {
  state = {
    lastDirection: null
  };

  swiped = (direction, id) => {
    // console.log("removing: " + nameToDelete);
    console.log("swipe on  " + direction);
    // setLastDirection(direction);
    if (direction == "left") {
    } else {
      ////CEK MATCH DATA SUDAH ADA BELUM
      ////JIKA BELUM ADA CREATE MATCH DGN STATUS FALSE
      ////JIKA SUDAH ADA UPDATE STATUS TRUE
      console.log("idpet",id);
      
    }
    this.setState({
      lastDirection: direction
    });
  };

  outOfFrame = name => {
    console.log(name + " left the screen!");
    ////IF CEK INDEX TERAKHIR LOAD ULANG
  };

  componentDidMount() {
    this.props.getPetsMatch(this.props.pet.data.id);
  }

  render() {
    const { pets, pets_match } = this.props;
    return (
      <>
        {/* <div style={{ display: "fixed", top: 0, left: 0 }}>
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }}>
              {this.state.lastDirection == "left" && (
                <div style={{color: "green" }}>
                  <h1>LIKE</h1>
                </div>
              )}
            </div>
            <div>
              {this.state.lastDirection == "right" && this.state.lastDirection}
            </div>
          </div>
        </div> */}
        <div className="swiper1">
          <div className="cardContainer">
            {pets_match.data.map(character => (
              <TinderCard
                className="swipe1"
                key={character.id}
                onSwipe={dir => this.swiped(dir, character.id)}
                onCardLeftScreen={() => this.outOfFrame(character.name)}
              >
                <div
                  style={{ backgroundImage: "url(" + character.photo + ")" }}
                  className="card1"
                >
                  <div className="caption">
                    <Typography variant="h5">
                      <b>{character.name}</b>
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        <PersonOutlineRoundedIcon fontSize="small" />
                      </div>
                      <div>Breeder : {character.user.name}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        <LocationOnOutlinedIcon fontSize="small" />
                      </div>
                      <div>10km dari sini</div>
                    </div>
                  </div>
                </div>
              </TinderCard>
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pets: state.pets,
    pet: state.pet,
    pets_match: state.pets_match
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPetsMatch: id => dispatch(getPetsMatch(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Swiper);
