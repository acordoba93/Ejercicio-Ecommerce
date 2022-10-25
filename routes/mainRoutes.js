const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.visualizarHome);

router.get("/search", mainController.search);

module.exports = router;








/*const express = require("express");
const router = express.Router();

const carritoController = require("../controllers/carritoController");
const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");


router.get("/carrito", carritoController.visualizarCar);
router.get("/", homeController.visualizarHome);
router.get("/login", loginController.visualizarLogin);

router.get("/search", homeController.search);
router.post('/usuarioLogueado', loginController.logueado);

module.exports = router;*/