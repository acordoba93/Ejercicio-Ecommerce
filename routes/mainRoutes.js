const express = require("express");
const router = express.Router();

const carritoController = require("../controllers/controllers/carritoController");
const homeController = require("../controllers/controllers/homeController");
const loginController = require("../controllers/controllers/loginController");
const registerController = require("../controllers/controllers/registerController");
const detalleController = require("../controllers/controllers/detalleController");

router.get("/carrito", carritoController.visualizarCar);
router.get("/", homeController.visualizarHome);
router.get("/login", loginController.visualizarLogin);
router.get("/register", registerController.visualizarRegistro);
router.get("/detail", detalleController.visualizarDetail);

module.exports = router;