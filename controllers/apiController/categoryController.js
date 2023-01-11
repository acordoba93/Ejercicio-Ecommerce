const db = require("../../database/models");
const express = require("express");

const bcryptjs = require("bcryptjs");

const categoryController = {
  index: async (req, res) =>{
    let categorias = await db.Category.findAll()
    return res.json({ categorias });
  },
  quantity: async (req, res) =>{
    let categorias = await db.Category.count()
    return res.json({ categorias});
  }
  };
  
module.exports = categoryController;