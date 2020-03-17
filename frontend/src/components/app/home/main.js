import React from "react";
import { withStyles } from "@material-ui/core";

import { Fab, Button } from "@material-ui/core";

import { withRouter } from "react-router-dom";

import FlashOnRoundedIcon from "@material-ui/icons/FlashOnRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import CachedRoundedIcon from "@material-ui/icons/CachedRounded";
import CloseIcon from '@material-ui/icons/Close';

import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

//import Swiper from "../../swiper/Deck";
import Swiper from "../../swiper";

const styles = theme => ({
  navigate1: {
    "& button": {
      margin: "5px"
    }
  },
  navigate2: {
    "& button": {
      margin: "2px",
      fontWight: "bold"
    }
  }
});

class Homex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfile: false
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div id="swiperswing" className="swiperswing">
        <Swiper />

        <div
          className={classes.navigate1}
          style={{
            bottom: 80,
            textAlign:"center"
          }}
        >
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <CachedRoundedIcon />
          </Fab>

          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <CloseIcon />
          </Fab>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <FavoriteBorderRoundedIcon />
          </Fab>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <FlashOnRoundedIcon />
          </Fab>
        </div>
        <div
          className={classes.navigate2}
          style={{
            bottom: 10,
            padding:"10px",
            display: "flex",
            justifyContent: "space-between"
            //   background:
            //     "linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0))"

            // padding:"10px",
            // color:"#000"
          }}
        >
          <Button
            size="small"
            variant="contained"
            style={{
              borderRadius: 20,
              padding: "0px 30px",
              backgroundColor: "#fff"
            }}
          >
            Hide
          </Button>
          <Button
            size="small"
            variant="contained"
            style={{
              borderRadius: 20,
              padding: "0px 10px",
              backgroundColor: "#fff"
            }}
          >
            <ArrowBackOutlinedIcon /> No
          </Button>
          <Button
            size="small"
            variant="contained"
            style={{
              borderRadius: 20,
              padding: "0px 10px",
              backgroundColor: "#fff"
            }}
          >
            <ArrowForwardOutlinedIcon /> Yes
          </Button>
          <Button
            size="small"
            variant="contained"
            style={{
              borderRadius: 20,
              padding: "0px 10px",
              backgroundColor: "#fff"
            }}
          >
            <ArrowUpwardRoundedIcon /> Open Profile
          </Button>
          <Button
            size="small"
            variant="contained"
            style={{
              borderRadius: 20,
              padding: "0px 10px",
              backgroundColor: "#fff"
            }}
          >
            <ArrowDownwardOutlinedIcon /> Close Profile
          </Button>
          <Button
            size="small"
            variant="contained"
            style={{
              borderRadius: 20,
              padding: "0px 10px",
              backgroundColor: "#fff"
            }}
          >
            Next Photo
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Homex));
