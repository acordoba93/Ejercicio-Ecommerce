const { validationResult } = require('express-validator');
const express = require("express");
const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const bcryptjs = require("bcryptjs");
const user  = require("../../modeloUser/user");

const usersController = {
  index: (req, res) =>{
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    res.json({ users });
    },
  };
  
module.exports = usersController;