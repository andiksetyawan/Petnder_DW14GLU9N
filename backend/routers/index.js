const express = require("express");
const router = express.Router();

//const sequelize = require("sequelize");

const { auth } = require("../middlewares/auth");

const { login, register, autoAuth } = require("../controllers/auth");

const species = require("../controllers/species");
const pet = require("../controllers/pet");
const user = require("../controllers/user");
const match = require("../controllers/match");
const payment = require("../controllers/payment");

router.get("/", (req, res) => res.send("homee"));
router.post("/login", login);
router.post("/register", register);
router.get("/autoauth", auth, autoAuth);

router.post("/species", species.store);
router.get("/species", species.show);

router.get("/pets", pet.shows);
router.get("/pets/user/:id", pet.showsByUser);

router.post("/pet", auth, pet.store);
router.put("/pet/:id", auth, pet.update);
router.delete("/pet/:id", auth, pet.destroy);

router.get("/pet/:id", auth, pet.show);

router.get("/pet/generate_matching/:id", auth, pet.generate_matching);


router.get("/user/:id", auth, user.show);
router.put("/user/:id", auth, user.update);
router.delete("/user/:id", auth, user.destroy);

// router.get("/match", auth, ()=>res.send("sdsd"));
router.get("/match", auth, match.show);
router.post("/match", auth, match.store);
router.patch("/match/:id", auth, match.update);
router.get("/matches", auth, match.shows); //get matches true status

router.post("/payment", auth, payment.store);
router.put("/payment/:id", auth, payment.update);
router.get("/payment", auth, payment.show);

////
// router.get("/gethash", genpasshash);
// router.post("/register1", register111);

module.exports = router;
