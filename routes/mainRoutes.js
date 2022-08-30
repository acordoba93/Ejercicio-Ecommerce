const express = require("express");
const homeController = require("../controllers/homecontrollers");
const logincontroller = require("../controllers/logincontrollers");
const detailcontroller = require("../controllers/detailcontrollers");
const carcontroller = require("../controllers/carcontrollers");
const registercontroller = require("../controllers/registercontrollers");
const router = express.Router();

router.get("/", homeController.visualizarHome);
router.get("/Login", logincontroller.visualizarLogin);
router.get("/detail", detailcontroller.visualizarDetail);
router.get("/carro", carcontroller.visualizarCar);
router.get("/Register", registercontroller.visualizarRegistro);


module.exports = router;