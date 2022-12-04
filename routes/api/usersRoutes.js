const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const usersController = require("../../controllers/api/usersConstrollers");

router.get("/", usersController.index);

module.exports = router;
