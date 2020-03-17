const models = require("../models");
// const Pet = models.pet;
// const Species = models.species;
const User = models.user;

exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ["password", "level", ] }
    });
    if (user) {
      res.json({
        success: true,
        message: "User was successfully loaded",
        data: user
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Load User data failed",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "Load User data failed, something went wrong",
      data: {}
    });
  }
};

exports.update = async (req, res) => {
  console.log(req.params);

  const { id } = req.params;
  // req.body.breeder = req.body.name;
  // console.log("body", req.body);

  try {
    const check_user = await User.findOne({ where: { id } });
    //  console.log("cekuser", check_user);
    if (check_user) {
      //console.log(check_user.id + "===" + req.user);
      if (check_user.id === req.user) {
        const userq = await User.update(req.body, {
          where: { id }
        });

        console.log("petq", userq);
        if (userq.length > 0 && userq[0]) {
          const user = await User.findOne({
            where: { id },
            attributes: { exclude: ["password", "level", "email", "id"] }
          });

          res.json({
            success: true,
            message: "User was successfully updated",
            data: user
          });
        } else {
          res.status(401).json({
            success: false,
            message: "update User fail",
            data: {}
          });
        }
      } else {
        res.status(401).json({
          success: false,
          message: "Not authorized",
          data: {}
        });
      }
    } else {
      res.status(401).json({
        success: false,
        message: "Not authorized",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: "Update User data failed, something went wrong",
      data: {}
    });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.destroy({ where: { id } });
    if (user) {
      res.json({
        success: true,
        message: "User was successfully deleted",
        data: { id }
      });
    } else {
      res.status(404).json({
        success: false,
        message: "delete user fail",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "Delete User data failed, something went wrong",
      data: {}
    });
  }
};
