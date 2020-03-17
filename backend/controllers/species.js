const models = require("../models");
const Species = models.species;

exports.store = async (req, res) => {
  try {
    const species = await Species.create(req.body);
    if (species) {
      res.json({
        success: true,
        message: "Species was successfully created",
        data: species
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Add species fail",
        data: {}
      });
    }
  } catch (err) {
    // if(err.message=="SequelizeUniqueConstraintError"){
    // console.log("err", err.name);
    // console.log(err);
    if (err.name == "SequelizeUniqueConstraintError") {
      res.status(401).json({
        success: false,
        message: "Species is already exist",
        data: {}
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Add species data failed, something went wrong",
        data: {}
      });
    }
  }
};

exports.show = async (req, res) => {
  try {
    const species = await Species.findAll();
    if (species) {
      res.json({
        success: true,
        message: "Species data was succesfully loaded",
        data: species
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Add species fail",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: "Load species data failed, something went wrong",
      data: {}
    });
  }
};
