const db = require("../database/models");
const { validationResult } = require('express-validator');
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const controller = {
  index: async (req, res) => {
    let products = await db.Product.findAll()
    return res.render("products", { products });
  },
  detalle: async (req, res) => {
    try {
      let product = await db.Product.findByPk(req.params.id);
      res.render("ProductDetail", { product });
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    let talles = await db.Size.findAll();
    let categorias = await db.Category.findAll();
    return res.render("FormCrearProducto", { talles, categorias });
  },
  store: async(req, res) => {
      try{
        const nuevoProducto = await db.Product.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      talle_id: req.body.talle,
      precio: req.body.precio,
      categoria_id: req.body.categoria,
      imagenProducto: req.file ? req.file.filename : 'ova-logo.jpg',
      });
        res.redirect('/products');
        } catch (error) {
          console.log(error);
      }
  },
  edit: async (req, res) => {
    try {
      const productToEdit = await db.Product.findByPk(req.params.id);
      res.render("FormEditarProducto", { productToEdit });
    } catch (error) {
      console.log(error);
    }
  },
  update : async function (req, res) {
    try { 
      const newProduct = await db.Product.update({
        nombre: req.body.nombre,
        precio: req.body.precio,
        talle: req.body.talle,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion
      },{
        where: {
          product_id: req.params.id
        }
      });
        res.redirect('/products');
    } catch (error) {
      console.log(error);
    }
  },
  destroy: async (req, res) => {
    try {
      await db.Product.destroy({
        where: {
          product_id: req.params.id
        }});
        let products = await db.Product.findAll();
      res.render("products", { products });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = controller;