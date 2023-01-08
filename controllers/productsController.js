const db = require("../database/models");
const { validationResult } = require('express-validator');
const fs = require("fs");
const path = require("path");
const multer = require("multer");

//const productsFilePath = path.join(__dirname, "../data/products.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
      console.log({error});
    }
  },
  create: async (req, res) => {
    let talles = await db.Size.findAll();
    return res.render("FormCrearProducto", { talles });
  },
  store: (req, res) => {
    const resultValidation = validationResult(req);
    if(resultValidation.isEmpty()){
      db.Product.create({
      //product_id: 7,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      talle_id: req.body.talle,
      precio: req.body.precio,
      categoria_id: 1,
      imagenProducto: req.file ? req.file.filename : 'ova-logo.jpg',
      })
      .then(()=> {
        return res.redirect('/products')})           
      .catch(error => res.send(error))
    }else{
      return res.render('FormCrearProducto', {
      errors: resultValidation.mapped(),
      oldData: req.body
      })
    }
  },
  edit: async (req, res) => {
    try {
      let productToEdit = await db.Product.findByPk(req.params.id);
      res.render("FormEditarProducto", { productToEdit });
    } catch (error) {
      console.log({error});
    }
  },
  update : (req, res) => {
    db.Product.update({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      talle_id: 3,
      precio: req.body.precio,
      categoria_id: 2,
    },
    {where: {
      id: req.params.id
      }
    })
    .then(()=> {
      return res.redirect('../products')})       // son dos puntos por que retrocede un slash product     
    .catch(error => res.send(error))
  },
  destroy: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    })
    then(()=> {
      return res.redirect("/products")})       // son dos puntos por que retrocede un slash product     
    .catch(error => res.send(error));  
  },
};

module.exports = controller;