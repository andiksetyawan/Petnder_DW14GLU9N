import React from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Snackbar,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";

import breeds from "../../../data/breeds.json";

import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

import BootstrapInput from "../../bootstrapInput";

// import AddPet from "./addpet";
import Profile from "./profile";
// import Edit from "./edit";
// import Add from "./add";

import { connect } from "react-redux";
import { addPet, editPet } from "../../../_actions/pet";
import { addPayment } from "../../../_actions/payment";

const styles = theme => ({
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    color: "#fff"
  },
  body: {
    //body dialog
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    textAlign: "center",
    padding: 20
  },
  add: {
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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "profile",
      isPremium: false,
      isOpen: false,
      isAlert: false,
      gender: "male",
      age: "adult",
      species: "",
      name_pet: "",
      about_pet: this.props.pet.data.about_pet,
      gender_edit: this.props.pet.data.gender,
      age_edit: this.props.pet.data.age,
      species_edit: this.props.pet.data.species.id,
      name_pet_edit: this.props.pet.data.name,
      about_pet_edit: this.props.pet.data.about_pet,
      no_rek: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    // const changeTitle = this.props;
    const { classes, pet, payment } = this.props;
    return (
      <div
        style={{
          // position: "fixed",
          background: "transparent"
        }}
      >
        <div
          style={{
            // position: "absolute",
            // width: "65vw",
            // position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"

            // maxWidth:200
          }}
        >
          <div
            style={{
              marginTop: 30,
              backgroundColor: "#fff",
              borderRadius: 10,
              height: "85vh",
              // maxHeight: 550,
              maxWidth: 350,
              overflow: "auto"
            }}
          >
            {this.state.active == "profile" && <Profile pet={this.props.pet} />}

            {/* EDIT PET */}
            {this.state.active == "edit" && (
              <>
                <div className={classes.add}>
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
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="3">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="4">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="5">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="6">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="7">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="8">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="9">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                </div>
                <div style={{ padding: 15 }}>
                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="subtitle2">Name Pet</Typography>
                    <TextField
                      id="filled-basic"
                      value="Gerry"
                      variant="filled"
                      value={this.state.name_pet_edit}
                      name="name_pet_edit"
                      onChange={this.handleChange}
                      fullWidth
                    />
                  </div>

                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="subtitle2">Gender</Typography>
                    <FormControl variant="filled" style={{ width: "100%" }}>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={this.state.gender_edit}
                        onChange={e =>
                          this.setState({ gender_edit: e.target.value })
                        }
                      >
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"female"}>Female</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="subtitle2">Age</Typography>
                    <FormControl variant="filled" style={{ width: "100%" }}>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={this.state.age_edit}
                        onChange={e =>
                          this.setState({ age_edit: e.target.value })
                        }
                      >
                        <MenuItem value={"child"}>Child</MenuItem>
                        <MenuItem value={"adult"}>Adult</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="subtitle2">Species</Typography>
                    <FormControl
                      margin="dense"
                      variant="filled"
                      style={{ width: "100%" }}
                    >
                      <Select
                        labelId="select-spesies-label"
                        id="select-spesies"
                        value={this.state.species_edit}
                        onChange={e =>
                          this.setState({ species_edit: e.target.value })
                        }
                      >
                        {this.props.species.data.map(item => {
                          return (
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </div>

                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="subtitle2">About</Typography>
                    <TextField
                      id="filled-basic"
                      value={this.state.about_pet_edit}
                      variant="filled"
                      name="about_pet_edit"
                      onChange={this.handleChange}
                      fullWidth
                      multiline
                    />
                  </div>
                </div>
              </>
            )}

            {/* ADD PET */}
            {this.state.active == "add" && (
              <>
                <div className={classes.add}>
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
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="3">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="4">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="5">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="6">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="7">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="8">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                  <div key="9">
                    <img
                      src="https://via.placeholder.com/300x400"
                      alt="gerry"
                    />
                    <section>
                      <AddCircleOutlinedIcon />
                    </section>
                  </div>
                </div>
                <div style={{ padding: 15 }}>
                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="subtitle2">Name Pet</Typography>
                    <TextField
                      id="filled-basic"
                      placeholder="Gerry"
                      variant="filled"
                      fullWidth
                      name="name_pet"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="subtitle2">Gender</Typography>
                    <FormControl variant="filled" style={{ width: "100%" }}>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={this.state.gender}
                        onChange={e =>
                          this.setState({ gender: e.target.value })
                        }
                      >
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"female"}>Female</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="subtitle2">Age</Typography>
                    <FormControl variant="filled" style={{ width: "100%" }}>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={this.state.age}
                        onChange={e => this.setState({ age: e.target.value })}
                      >
                        <MenuItem value={"child"}>Child</MenuItem>
                        <MenuItem value={"adult"}>Adult</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="subtitle2">Species</Typography>
                    <FormControl
                      margin="dense"
                      variant="filled"
                      style={{ width: "100%" }}
                    >
                      <Select
                        labelId="select-spesies-label"
                        id="select-spesies"
                        value={this.state.species}
                        onChange={e =>
                          this.setState({ species: e.target.value })
                        }
                      >
                        {this.props.species.data.map(item => {
                          return (
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="subtitle2">About</Typography>
                    <TextField
                      id="filled-basic"
                      variant="filled"
                      name="about_pet"
                      fullWidth
                      multiline
                      placeholder="Is simply dummy text of the printing and typesetting industry. "
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </>
            )}

            <div
              style={{
                position: "sticky",
                bottom: 0,
                // bottom: 10,
                right: "50%",
                // backgroundColor:"gray",
                width: "100%",
                textAlign: "center"
                // zIndex: 100000
              }}
            >
              {this.state.active == "profile" && (
                <Button
                  style={{ borderRadius: 20, margin: "10px 0" }}
                  size="large"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    this.setState({ active: "edit" });
                    this.props.onTitle("Edit Profile Pet");
                    // this.changeTitle("sadfa");
                  }}
                >
                  Edit
                </Button>
              )}
              {this.state.active == "edit" && (
                <Button
                  style={{ borderRadius: 20, margin: "10px 0" }}
                  size="large"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    const data_edit_pet = {
                      user: this.props.user.data.id,
                      name: this.state.name_pet_edit,
                      gender: this.state.gender_edit,
                      species: this.state.species_edit,
                      age: this.state.age_edit,
                      about_pet: this.state.about_pet_edit
                      //photo
                    };

                    this.props.editPet(pet.data.id, data_edit_pet);

                    this.setState({ active: "profile" });
                    this.props.onTitle("Profile Pet");

                    // this.props.changeTitle("dfdf");
                  }}
                >
                  Save
                </Button>
              )}
              {this.state.active == "add" && (
                <Button
                  style={{ borderRadius: 20, margin: "10px 0" }}
                  size="large"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    const data_add_pet = {
                      user: this.props.user.data.id,
                      name: this.state.name_pet,
                      gender: this.state.gender,
                      species: this.state.species,
                      age: this.state.age,
                      about_pet: this.state.about_pet
                      //photo
                    };

                    console.log("data_add_pet", data_add_pet);

                    this.props.addPet(data_add_pet);

                    this.setState({ active: "profile" });
                    this.props.onTitle("Profile Pet");

                    // this.props.changeTitle("dfdf");
                  }}
                >
                  Save New Pet
                </Button>
              )}
            </div>
          </div>
          <div style={{ position: "fixed", right: 10, top: 30 }}>
            {this.state.active == "profile" && (
              <Button
                style={{
                  borderRadius: 20
                }}
                variant="contained"
                color="primary"
                onClick={() => {
                  // this.props.onTitle("edit");
                  if (payment.data.status === "free") {
                    ///open model
                    if(!payment.data.proof_of_transfer){
                      this.setState({ isOpen: true });
                    }else{
                      this.setState({ isAlert: true})
                    }
                  } else {
                    this.setState({ active: "add" });
                    this.props.onTitle("Add Profile Pet");
                  }
                }}
              >
                ADD PET
              </Button>
            )}

            <Dialog
              open={this.state.isOpen}
              onClose={() => this.setState({ isOpen: false })}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              maxWidth="xs"
            >
              <div className={classes.body}>
                <DialogTitle>
                  <Typography
                    variant="h3"
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    Premium
                  </Typography>
                  <IconButton
                    size="small"
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={() => {
                      this.setState({ isOpen: false });
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent>
                  <Typography variant="h6" color="inherit">
                    Upgrade Breednder mu dan nikmati fitur-fitur <b>PRO.</b>
                  </Typography>
                  <Typography variant="subtitle1" color="inherit">
                    <b>Breednder : 081234567890</b>
                  </Typography>
                  <BootstrapInput
                    type="number"
                    placeholder="No. Rek Kamu"
                    fullWidth
                    style={{ margin: "20px 0 20px 0" }}
                    name="no_rek"
                    onChange={this.handleChange}
                  />

                  <div>
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.79)" }}
                        component="span"
                      >
                        {/* <CameraAltOutlinedIcon style={{ fontSize: 175,color:"rgba(153, 153, 153, 0.73)" }} /> */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                          }}
                        >
                          <CameraAltOutlinedIcon
                            style={{
                              fontSize: 175,
                              color: "rgba(0, 0, 0, 0.54)"
                              // color: "#000"
                            }}
                          />
                          <div
                            style={{
                              color: "rgba(0, 0, 0, 0.54)"
                              //color: "#000"
                            }}
                          >
                            <b>Upload Bukti Transfer</b>
                          </div>
                        </div>
                      </Button>
                    </label>
                    <input
                      style={{ display: "none" }}
                      accept="image/*"
                      // className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                  </div>

                  <Button
                    onClick={() => {
                      //save new payment w/ status free
                      const data_payment = {
                        no_rek: this.state.no_rek
                        // proof_of_transfer: this.state.proof_of_transfer
                      };
                      this.props.addPayment(data_payment);
                      this.setState({ isOpen: false, isAlert: true });
                    }}
                    style={{
                      borderRadius: 20,
                      padding: "10px 100px",
                      margin: "20px 0 20px 0"
                    }}
                    color="default"
                    variant="contained"
                  >
                    Kirim
                  </Button>
                </DialogContent>
              </div>
            </Dialog>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              open={this.state.isAlert}
              //autoHideDuration={6000}
              onClose={() => this.setState({ isAlert: false, isPremium: true })}
            >
              <Alert
                onClose={() =>
                  this.setState({ isAlert: false, isPremium: true })
                }
                severity="success"
              >
                Terimakasih silahkan tunggu konfirmasi dari admin untuk pembayaran payment status premium anda.
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    species: state.species,
    user: state.user,
    pet: state.pet,
    payment: state.payment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPet: data => dispatch(addPet(data)),
    editPet: (id_pet, data) => dispatch(editPet(id_pet, data)),
    addPayment: data => dispatch(addPayment(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Main)));
