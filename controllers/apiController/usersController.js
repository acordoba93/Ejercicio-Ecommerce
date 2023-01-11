const db = require("../../database/models");
const { validationResult } = require('express-validator');
const express = require("express");
//const fs = require("fs");
//const path = require("path");
//const usersFilePath = path.join(__dirname, "../../data/users.json");
//const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const bcryptjs = require("bcryptjs");
//const user  = require("../../modeloUser/user");

const usersController = {
  index: async (req, res) =>{
    let usuarios = await db.User.findAll()
    return res.json({ usuarios });
  },
  quantity: async (req, res) =>{
    let usuarios = await db.User.count()
    return res.json({ usuarios});

  }
  };
  
module.exports = usersController;