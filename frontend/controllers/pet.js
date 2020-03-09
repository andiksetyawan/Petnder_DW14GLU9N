const models = require("../models");
const Pet = models.pet;
const Species = models.species;
const Payment = models.payment;
const User = models.user;

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.store = async (req, res) => {
  try {
    console.log("masuk store pet", req.body);
    const pet = req.body;
    const data_pet = {
      name: pet.name,
      gender: pet.gender.toLowerCase(),
      species_id: pet.species,
      age: pet.age.toLowerCase(),
      user_id: pet.user,
      about_pet: pet.about_pet,
      photo: pet.photo
    };
    console.log(data_pet);

    const check_payment = await Payment.findOne({
      where: { user_id: pet.user }
    });
    //console.log("cek ==== ", pet.user.id);
    if (check_payment) {
      if (check_payment.status === "premium") {
        const petq = await Pet.create(data_pet);

        if (petq) {
          const pet_return = await Pet.findOne({
            where: { id: petq.id },
            attributes: { exclude: ["species_id", "user_id"] },
            include: [
              {
                model: Species,
                // as: "spesies"
                attributes: ["id", "name"]
              },
              {
                model: User,
                // as: "user"
                attributes: ["id", "name", "address", "phone"]
              }
            ]
          });

          console.log("pet_return", pet_return);

          res.json({
            success: true,
            message: "New Pet was successfully created",
            data: pet_return
          });
        } else {
          res.status(404).json({
            success: false,
            message: "Add pet fail",
            data: {}
          });
        }
      } else {
        res.status(401).json({
          success: false,
          message: "You're not a Premium user",
          data: {}
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: "Add pet fail, not found payment data",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "Add pet data failed, something went wrong",
      data: {}
    });
  }
};

exports.shows = async (req, res) => {
  try {
    const pet = await Pet.findAll({
      attributes: { exclude: ["species_id", "user_id"] },
      include: [
        {
          model: Species,
          // as: "spesies"
          attributes: ["id", "name"]
        },
        {
          model: User,
          // as: "user"
          attributes: ["id", "name", "address", "phone"]
        }
      ]
    });
    if (pet) {
      res.json({
        success: true,
        message: "Load Pet success",
        data: pet
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Load pet fail",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: "Loads pet data failed, something went wrong",
      data: {}
    });
  }
};

exports.showsByUser = async (req, res) => {
  try {
    const pet = await Pet.findAll({
      where: { user_id: req.params.id },
      attributes: { exclude: ["species_id", "user_id"] },
      include: [
        {
          model: Species,
          // as: "spesies"
          attributes: ["id", "name"]
        },
        {
          model: User,
          // as: "user"
          attributes: ["id", "name", "address", "phone"]
        }
      ]
    });
    if (pet) {
      res.json({
        success: true,
        message: "Load Pet success",
        data: pet
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Load pet fail",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: "Loads pet data failed, something went wrong",
      data: {}
    });
  }
};

exports.update = async (req, res) => {
  console.log(req.params);
  console.log(req.body);

  const { id } = req.params;
  const pet = req.body;
  try {
    const check_user = await Pet.findOne({ where: { id }, include: [User] });

    // console.log("check_user", check_user);
    // console.log("user", check_user.user.id + " === " + req.user);

    const data_pet = {
      name: pet.name,
      gender: pet.gender.toLowerCase(),
      species_id: pet.species,
      age: pet.age.toLowerCase(),
      user_id: pet.user,
      about_pet: pet.about_pet,
      photo: pet.photo
    };

    if (check_user) {
      if (check_user.user.id === req.user) {
        const petq = await Pet.update(data_pet, {
          where: { id }
        });

        console.log("petq=========", petq);
        if (petq.length > 0 && petq[0]) {
          const pet = await Pet.findOne({
            attributes: { exclude: ["species_id", "user_id"] },
            where: { id },
            include: [
              {
                model: Species,
                // as: "spesies"
                attributes: ["id", "name"]
              },
              {
                model: User,
                // as: "user"
                attributes: ["id", "name", "address", "phone"]
              }
            ]
          });

          res.json({
            success: true,
            message: "Pet was successfully updated",
            data: pet
          });
        } else {
          res.status(401).json({
            success: false,
            message: "update pet fail",
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
        message: "update pet fail",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: "Updating pet data failed, something went wrong",
      data: {}
    });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.destroy({ where: { id } });
    if (pet) {
      res.json({
        success: true,
        message: "Pet was successfully deleted",
        data: { id }
      });
    } else {
      res.status(404).json({
        success: false,
        message: "delete pet fail",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "Deleting pet data failed, something went wrong",
      data: {}
    });
  }
};

exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await Pet.findOne({
      attributes: { exclude: ["species_id", "user_id"] },
      where: { id },
      include: [
        {
          model: Species,
          // as: "spesies"
          attributes: ["id", "name"]
        },
        {
          model: User,
          // as: "user"
          attributes: ["id", "name", "address", "phone"]
        }
      ]
    });
    if (pet) {
      res.json({
        success: true,
        message: "Pet was successfully loaded",
        data: pet
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Load pet fail",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "Load pet data failed, something went wrong",
      data: {}
    });
  }
};

exports.generate_matching = async (req, res) => {
  const { id } = req.params;
  console.log("masuk genereratxxxxxxx",id);
  try {
    // const match = await Match.findAll({
    //   where: {
    //     [Op.or]: [
    //       {
    //         pet_id: id
    //       },
    //       {
    //         pet_like: id
    //       }
    //     ],
    //     status: false
    //   }
    // });
    // if(match){
    //   console.log("match",match);
    // }
    const pet = await Pet.findAll({
      attributes: { exclude: ["species_id", "user_id"] },
      // where: { id: { [Op.ne]: req.user } },
      where: { user_id: { [Op.ne]: req.user } },
      include: [
        {
          model: Species,
          // as: "spesies"
          attributes: ["id", "name"]
        },
        {
          model: User,
          // as: "user"
          attributes: ["id", "name", "address", "phone"]
        }
      ]
    });
    if (pet) {
      res.json({
        success: true,
        message: "Pet was successfully loaded",
        data: pet
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Load pet fail",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "Load pet data failed, something went wrong",
      data: {}
    });
  }
};
