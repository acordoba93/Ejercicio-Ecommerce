const { validationResult } = require('express-validator');
const express = require("express");
const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersController = {
  index: (req, res) =>{
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    res.status(200).json({ users });
    },
  };
module.exports = usersController;