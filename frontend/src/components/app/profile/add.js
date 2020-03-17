import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import breeds from "../../../data/breeds.json";

import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";

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
      height: 130,
      width: 95,
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
        textAlign: "right",
        color: theme.palette.primary.main,
        //rigth:0,
        // left: 10,
        // textAlign: "left",
        // paddingLeft: 5,
        width: "100%"
        // background:
        //   "linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0))",
        // background:"linear-gradient(red, yellow)",
        // borderRadius: "0px 0px 10px 10px",
        // "& h6": {
        //   paddingLeft: 10
        // }
        //top: 0
      }
    }
  }
});

class Add extends React.Component {
  state = {
    gender: "Male"
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <div key="1">
            <img
              src="https://cdn2.thecatapi.com/images/8dh.jpg"
              alt="gerry"
            />
            <section>
              <CancelIcon />
            </section>
          </div>
          <div key="2">
            <img src="https://via.placeholder.com/300x400" alt="gerry" />
            <section>
              <AddCircleOutlinedIcon />
            </section>
          </div>
          <div key="3">
            <img src="https://via.placeholder.com/300x400" alt="gerry" />
            <section>
              <AddCircleOutlinedIcon />
            </section>
          </div>
          <div key="4">
            <img src="https://via.placeholder.com/300x400" alt="gerry" />
            <section>
              <AddCircleOutlinedIcon />
            </section>
          </div>
          <div key="5">
            <img src="https://via.placeholder.com/300x400" alt="gerry" />
            <section>
              <AddCircleOutlinedIcon />
            </section>
          </div>
          <div key="6">
            <img src="https://via.placeholder.com/300x400" alt="gerry" />
            <section>
              <AddCircleOutlinedIcon />
            </section>
          </div>
          <div key="7">
            <img src="https://via.placeholder.com/300x400" alt="gerry" />
            <section>
              <AddCircleOutlinedIcon />
            </section>
          </div>
          <div key="8">
            <img src="https://via.placeholder.com/300x400" alt="gerry" />
            <section>
              <AddCircleOutlinedIcon />
            </section>
          </div>
          <div key="9">
            <img src="https://via.placeholder.com/300x400" alt="gerry" />
            <section>
              <AddCircleOutlinedIcon />
            </section>
          </div>
        </div>
        <div style={{ padding: 15 }}>
          <div style={{ marginBottom: 10 }}>
            <Typography variant="subtitle2">Name Per</Typography>
            <TextField
              id="filled-basic"
              placeholder="Gerry"
              variant="filled"
              fullWidth
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <Typography variant="subtitle2">Breeder</Typography>
            <TextField
              id="filled-basic"
              placeholder="Egi Ginting"
              variant="filled"
              fullWidth
            />
          </div>

          <div style={{ marginBottom: 10 }}>
            <Typography variant="subtitle2">Gender</Typography>
            <FormControl variant="filled" style={{ width: "100%" }}>
              {/* <InputLabel id="demo-simple-select-filled-label">
                Gender
              </InputLabel> */}
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={this.state.gender}
                onChange={() => {}}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginBottom: 10 }}>
            <Typography variant="subtitle2">Age</Typography>
            <TextField id="filled-basic" variant="filled" fullWidth placeholder="5"/>
          </div>
          <div style={{ marginBottom: 10 }}>
            <Typography variant="subtitle2">About</Typography>
            <TextField id="filled-basic" variant="filled" fullWidth multiline placeholder="Is simply dummy text of the printing and typesetting industry. "/>
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Add);
