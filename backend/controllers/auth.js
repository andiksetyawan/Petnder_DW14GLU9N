require("dotenv").config();

const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;
const Pet = models.pet;

const bcrypt = require("bcrypt");

exports.autoAuth = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.user } });
    if (user) {
      res.json({
        success: true,
        message: "Login success",
        data: { id: user.id, email: user.email, token: req.token }
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid login credentials. Please relogin",
        data: {}
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid login credentials. please relogin",
      data: {}
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
        res.json({
          success: true,
          message: "Login success",
          data: { id: user.id, email: user.email, token }
        });
      } else {
        //invalid email

        res.status(401).json({
          success: false,
          message: "Invalid login credentials. please try again",
          data: {}
        });
      }
    } else {
      //invalid password
      res.status(401).json({
        success: false,
        message: "Invalid login credentials. please try again",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: "Login failed, something went wrong",
      data: {}
    });
  }
};

exports.register = async (req, res) => {
  //const  user = req.body;
  console.log("body", req.body);
  const { pet } = req.body;
  models.sequelize
    .transaction(async t => {
      try {
        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;
        const user = await User.create(req.body, { transaction: t });
        console.log("userr", user);
        const data_pet = {
          user_id: user.id,
          name: pet.name,
          gender: pet.gender,
          species_id: pet.species,
          age: pet.age
        };
        // console.log("datapet", data_pet);

        const petq = await Pet.create(data_pet, { transaction: t });
        //console.log("pet", user);

        return { user, pet: petq };
      } catch (error) {
        console.log("error", error);
        throw new Error(error.name);
      }
    })
    .then(data => {
      // Transaction has been committed
      //  console.log("data", data);
      const token = jwt.sign({ user_id: data.user.id }, process.env.SECRET_KEY);
      res.json({
        success: true,
        message: "Your account was successfully created",
        data: { id: data.user.id, email: data.user.email, token }
      });
    })
    .catch(err => {
      // Transaction has been rolled back
      if (err.message == "SequelizeUniqueConstraintError") {
        res.status(400).json({
          success: false,
          message: "Email is already registered",
          data: {}
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Register failed, something went wrong",
          data: {}
        });
      }
    });
};

//////
exports.genpasshash = async (req, res) => {
  console.log("sdfs");
  const saltRounds = 10;
  const myPlaintextPassword = "1234";
  console.log(saltRounds);

  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash);
    res.send(hash);
  });
};
