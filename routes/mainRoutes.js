const express = require("express");
const router = express.Router();

const carritoController = require("../controllers/carritoController");
const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const detalleController = require("../controllers/detalleController");

router.get("/carrito", carritoController.visualizarCar);
router.get("/", homeController.visualizarHome);
router.get("/login", loginController.visualizarLogin);
router.get("/register", registerController.visualizarRegistro);
router.get("/detail", detalleController.visualizarDetail);
router.get("/search", homeController.search);

module.exports = router;