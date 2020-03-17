const models = require("../models");
const Match = models.match;
const Pet = models.pet;
const User = models.user;
const Species = models.species;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.show = async (req, res) => {
  //console.log("q", req.query);
  try {
    const { pet_id, pet_id_liked } = req.query;
    const match = await Match.findOne({
      //check whether pet_id is preferred by pet_id_liked
      where: {
        [Op.or]: [
          {
            pet_id,
            pet_like: pet_id_liked
          },
          {
            pet_id: pet_id_liked,
            pet_like: pet_id
          }
        ]
        //status:true
      },
      attributes: { exclude: ["pet_id", "pet_like"] },
      include: [
        {
          model: Pet,
          as: "pet",
          include: [
            {
              model: User,
              as: "user",
              attributes: ["id", "name", "address", "phone"]
            },
            {
              model: Species,
              attributes: ["id", "name"]
            }
          ]
          // attributes: ["id", "name"]
        },
        {
          model: Pet,
          as: "pet_liked",
          // attributes: ["id", "name"],
          include: [
            {
              model: User,
              as: "user",
              attributes: ["id", "name", "address", "phone"]
            },
            {
              model: Species,
              attributes: ["id", "name"]
            }
          ]
        }
      ]
    });
    if (match) {
      res.json({
        success: true,
        message: "Match found",
        data: match
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Match not found",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "Checking match failed, something went wrong",
      data: {}
    });
  }
};

exports.store = async (req, res) => {
  try {
    const data_match = {
      pet_id: req.body.pet_id,
      pet_like: req.body.pet_id_liked,
      status: req.body.status
    };
    const match = await Match.create(data_match);
    if (match) {
      const matchr = await Match.findOne({
        where: { id: match.id },
        attributes: { exclude: ["pet_id", "pet_like"] },
        include: [
          {
            model: Pet,
            as: "pet",
            attributes: { exclude: ["species_id", "user_id"] },
            include: [
              {
                model: User,
                as: "user",
                attributes: ["id", "name", "address", "phone"]
              },
              {
                model: Species,
                attributes: ["id", "name"]
              }
            ]
            // attributes: ["id", "name"]
          },
          {
            model: Pet,
            as: "pet_liked",
            attributes: { exclude: ["species_id", "user_id"] },
            include: [
              {
                model: User,
                as: "user",
                attributes: ["id", "name", "address", "phone"]
              },
              {
                model: Species,
                attributes: ["id", "name"]
              }
            ]
          }
        ]
      });
      if (matchr) {
        res.json({
          success: true,
          message: "Match has been created",
          data: matchr
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Something wrong, please check match data.",
          data: {}
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: "Create match failed",
        data: {}
      });
    }
  } catch (err) {
    console.log("err", err);
    res.status(404).json({
      success: false,
      message: "Create match failed, something went wrong",
      data: {}
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const data_match = {
      pet_id: req.body.pet_id,
      pet_like: req.body.pet_id_liked,
      status: req.body.status
    };
    const match = await Match.update(data_match, {
      where: { id }
    });

    if (match.length > 0 && match[0]) {
      const matchr = await Match.findOne({
        where: { id },
        attributes: { exclude: ["pet_id", "pet_like"] },
        include: [
          {
            model: Pet,
            as: "pet",
            attributes: { exclude: ["species_id", "user_id"] },

            include: [
              {
                model: User,
                as: "user",
                attributes: ["id", "name", "address", "phone"]
              },
              {
                model: Species,
                attributes: ["id", "name"]
              }
            ]
          },
          {
            model: Pet,
            as: "pet_liked",
            attributes: { exclude: ["species_id", "user_id"] },

            include: [
              {
                model: User,
                as: "user",
                attributes: ["id", "name", "address", "phone"]
              },
              {
                model: Species,
                attributes: ["id", "name"]
              }
            ]
          }
        ]
      });
      if (matchr) {
        res.json({
          success: true,
          message: "Update Match success",
          data: matchr
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Update Match  fail",
          data: {}
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: "Update Match fail",
        data: {}
      });
    }
  } catch (err) {
    console.log("err", err);
    res.status(404).json({
      success: false,
      message: "Something wrong, update Match  fail",
      data: {}
    });
  }
};

exports.shows = async (req, res) => {
  console.log("q", req.query);
  try {
    const { pet_id, status } = req.query;
    // console.log("q", req.query);
    const status_boolean = status === "true"; //convert to boolean
    const match = await Match.findAll({
      where: {
        //pet_id,
        [Op.or]: [{ pet_id }, { pet_like: pet_id }],
        status: status_boolean
      },
      attributes: { exclude: ["pet_id", "pet_like"] },
      include: [
        {
          model: Pet,
          as: "pet",
          attributes: { exclude: ["species_id", "user_id"] },

          include: [
            {
              model: User,
              as: "user",
              attributes: ["id", "name", "address", "phone"]
            },
            {
              model: Species,
              attributes: ["id", "name"]
            }
          ]
          // attributes: ["id", "name"]
        },
        {
          model: Pet,
          as: "pet_liked",
          attributes: { exclude: ["species_id", "user_id"] },

          include: [
            {
              model: User,
              as: "user",
              attributes: ["id", "name", "address", "phone"]
            },
            {
              model: Species,
              attributes: ["id", "name"]
            }
          ]
        }
      ]
    });
    console.log("match", match);
    if (match) {
      res.json({
        success: true,
        message: "Load Matched Pet success",
        data: match
      });
    } else {  
      res.status(404).json({
        success: false,
        message: "Matched Pet not found",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "load Matched pet fail",
      data: {}
    });
  }
};
