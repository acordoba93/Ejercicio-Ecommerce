const express = require("express");
const homeController = require("../controllers/homecontrollers");
const router = express.Router();

console.log(homeController)
router.get("/", homeController.visualizarHome);

module.exports = router;