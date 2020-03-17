const jwt = require("jsonwebtoken");
require("dotenv").config();

const models = require("../models");
const User = models.user;

exports.auth = async (req, res, next) => {
  try {
    console.log("aur",req.header("Authorization"))
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log("token",token);
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ where: { id: data.user_id } });
    if (!user) {
      throw new Error();
    }
    req.user = user.id;
    req.level = user.level;
    req.token = token;
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({
      success: false,
      message: "Token not found",
      data: {}
    });
  }
};
