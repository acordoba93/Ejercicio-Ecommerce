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
    console.log("pase por aca");
    let products = await db.Product.findAll()
      return res.render("products", { productos: [] });
    },
  detalle: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const producto = products.find((p) => p.id == req.params.id);
    res.render("ProductDetail", { producto});
  },
  create: function(req, res) {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.render("FormCrearProducto");
  },
  store: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    const resultValidation = validationResult(req);
  if(resultValidation.isEmpty()){
    
    const productoNuevo = {
      id: Date.now(),
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      talle: req.body.talle,
      precio: req.body.precio,
      imagenProducto: "ova-logo.jpg",
      categoria: req.body.categoria

    };
    if(req.file){
      productoNuevo.imagenProducto = req.file.filename
    }
    console.log(productoNuevo);

    products.push(productoNuevo)

    const data = JSON.stringify(products, null, " ");
    fs.writeFileSync(productsFilePath, data);

    res.redirect("/products");
  }else{
  return res.render('FormCrearProducto', {
    errors: resultValidation.mapped(),
    oldData: req.body
  })
}

  },
  edit: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    const producto = products.find((p) => p.id == req.params.id);

    res.render("FormEditarProducto", { productToEdit: producto });
  },
  update: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    products.forEach(p => {
      if(p.id == req.params.id){
        p.nombre = req.body.nombre,
        p.precio = req.body.precio,
        p.talle = req.body.talle,
        p.categoria = req.body.categoria,
        p.descripcion = req.body.descripcion
      } 
    });
    const data = JSON.stringify(products, null, " ");
    fs.writeFileSync(productsFilePath, data);

    res.redirect("/products/detail/" + req.params.id)
  },

  destroy: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    products = products.filter((p) => p.id != req.params.id);

    const data = JSON.stringify(products, null, " ");
    fs.writeFileSync(productsFilePath, data);
    res.redirect("/products");  
  },
};

module.exports = controller;