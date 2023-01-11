const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const usersController = require("../../controllers/apiController/usersController");

router.get("/", usersController.index);

router.get("/qty", usersController.quantity);


module.exports = router;