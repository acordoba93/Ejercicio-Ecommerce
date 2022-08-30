const express = require("express");
const detailcontroller = require("../controllers/detailcontrollers");
const router = express.Router();

router.get("/detail", detailcontroller.visualizarDetail);

module.exports = router;