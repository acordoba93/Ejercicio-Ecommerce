const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");


// ************ Controller Require ************
const productsController = require("../../controllers/api/productsControllers");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);


module.exports = router;