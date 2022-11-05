const express = require("express");
const router = express.Router();
//const productsRoutes = require("./products");
//const usersRoutes = require("./users");

const mainController = require("../controllers/mainController");

//router.get('/',mainController.home);


router.get("/", mainController.visualizarHome);

router.get("/search", mainController.search);

module.exports = router;