const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productsController = require("../../controllers/apiController/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);


module.exports = router;