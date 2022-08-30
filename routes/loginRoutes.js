const express = require("express");
const logincontroller = require("../controllers/logincontrollers");
const router = express.Router();

router.get("/Login", logincontroller.visualizarLogin);

module.exports = router;