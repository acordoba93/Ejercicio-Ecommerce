const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const categoryController = require("../../controllers/apiController/categoryController");

router.get("/", categoryController.index);

router.get("/qty", categoryController.quantity);


module.exports = router;