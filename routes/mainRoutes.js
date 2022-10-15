const express = require("express");
const router = express.Router();

const carritoController = require("../controllers/carritoController");
const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");

router.get("/carrito", carritoController.visualizarCar);
router.get("/", homeController.visualizarHome);
router.get("/login", loginController.visualizarLogin);
//router.get("/register", registerController.visualizarRegistro);
router.get("/search", homeController.search);
router.post('/usuarioLogueado', loginController.logueado);

module.exports = router;