const express = require("express");
const carcontroller = require("../controllers/carcontrollers");
const router = express.Router();

router.get("/", carcontroller.visualizarCar);

module.exports = router;