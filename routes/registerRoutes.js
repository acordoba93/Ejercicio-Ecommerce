const express = require("express");
const registercontroller = require("../controllers/registercontrollers");
const router = express.Router();

router.get("/Register", registercontroller.visualizarRegistro);

module.exports = router;