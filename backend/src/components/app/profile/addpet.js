import React from "react";
import {
  Button,
  Dialog,
  withStyles,
  DialogTitle,
  Typography,
  IconButton,
  DialogContent,
  Snackbar
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

import BootstrapInput from "../../bootstrapInput";

const styles = theme => ({
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    color: "#fff"
  },
  body: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    textAlign: "center",
    padding: 20
  }
});

class AddPet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isAlert: false, isPremium:false };
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Button
          onClick={() => this.setState({ isOpen: true })}
          style={{
            borderRadius: 20
          }}
          variant="contained"
          color="primary"
        >
          ADD PET
        </Button>
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
            onClose={() => this.setState({ isAlert: false, isPremium: true })}
            severity="success"
          >
            Terimakasih silahkan tunggu konfirmasi pembayaran
          </Alert>
        </Snackbar>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AddPet);
