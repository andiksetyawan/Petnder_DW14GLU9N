import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import CloseIcon from "@material-ui/icons/Close";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { getSpecies } from "../_actions/species";
import { register } from "../_actions/auth";

const styles = theme => ({
  root: {
    textAlign: "center"
  },
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    color: theme.palette.secondary.main
  }
  // formControl: {
  //   margin: theme.spacing(2),
  //   minWidth: 200,
  // },
});

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: false,
      //spesies: [],
      selectedSpesies: "",
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      namepet: "",
      gender: "",
      species: 0,
      age: ""
    };
  }

  componentDidMount() {
    // console.log("didmount localstorage");
    //load species
    this.props.getSpecies();
  }

  handleClose = () => {
    this.setState({ isopen: false });
  };

  handleRegister = () => {
    alert("reg");
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address,
      pet: {
        name: this.state.namepet,
        gender: this.state.gender,
        species: this.state.selectedSpesies,
        age: this.state.age
      }
    };

    this.props.register(data);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { classes, species, auth } = this.props;
    const { loading, error } = auth;
    //let history = useHistory();

    console.log("species props erorrrrrr", error);
    console.log("selected", this.state.selectedSpesies);

    return (
      <div className={classes.root}>
        <Button
          style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50 }}
          size="large"
          variant="contained"
          color="secondary"
          onClick={() => this.setState({ isopen: true })}
        >
          Register
        </Button>
        <Dialog
          open={this.state.isopen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="xs"
        >
          <DialogTitle>
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Register
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <IconButton
              size="small"
              aria-label="close"
              className={classes.closeButton}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <form noValidate autoComplete="off">
              <TextField
                type="text"
                margin="dense"
                label="Breeder"
                variant="filled"
                name="name"
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                type="email"
                margin="dense"
                label="Email"
                variant="filled"
                name="email"
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                type="password"
                margin="dense"
                label="Password"
                variant="filled"
                name="password"
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                type="text"
                margin="dense"
                label="Phone Breeder"
                variant="filled"
                name="phone"
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                type="text"
                margin="dense"
                label="Address Breeder"
                variant="filled"
                name="address"
                multiline //textarea render
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                type="text"
                margin="dense"
                label="Name Pet"
                variant="filled"
                name="namepet"
                fullWidth
                onChange={this.handleChange}
              />

              {/* <TextField
                type="text"
                margin="dense"
                label="Gender Pet"
                variant="filled"
                name="gender"
                fullWidth
                onChange={this.handleChange}
              /> */}
              <div style={{ margin: "10px 0" }}>
                {/* <Typography variant="subtitle2">Gender</Typography> */}
                <FormControl variant="filled" style={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-filled-label-gender">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label-gender"
                    id="demo-simple-select-filled-gender"
                    value={this.state.gender}
                    onChange={e => this.setState({ gender: e.target.value })}
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ margin: "10px 0" }}>
                <FormControl variant="filled" style={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Age
                  </InputLabel>
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

              <FormControl
                margin="dense"
                variant="filled"
                style={{ width: "100%" }}
              >
                <InputLabel id="select-spesies">Spesies Pet</InputLabel>
                <Select
                  labelId="select-spesies-label"
                  id="select-spesies"
                  value={this.state.selectedSpesies}
                  onChange={e =>
                    this.setState({ selectedSpesies: e.target.value })
                  }
                >
                  {species.data.map(item => {
                    return <MenuItem value={item.id}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>

              {/* <TextField
                margin="dense"
                label="Age Pet"
                variant="filled"
                name="age"
                fullWidth
                onChange={this.handleChange}
              /> */}

              <Button
                style={{ borderRadius: 20, margin: "20px 0" }}
                fullWidth
                size="large"
                variant="contained"
                color="secondary"
                onClick={this.handleRegister}
              >
                Register
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    species: state.species,
    auth: state.auth
  };
};

const mapDispatchToProps = dispacth => {
  return {
    getSpecies: () => dispacth(getSpecies()),
    register: data => dispacth(register(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Register)));
