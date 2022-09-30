const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.render("products", { productos: products });
  },
  detalle: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const producto = products.find((p) => p.id == req.params.id);
    res.render("ProductDetail", { producto });
  },
  create: (req, res) => {
    res.render("FormCrearProducto");
  },
  store: (req, res) => {

  },

  // Update - Form to edit
  edit: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const producto = products.find((p) => p.id == req.params.id);

    res.render("product-edit-form", { productToEdit: producto });
  },
  // Update - Method to update
  update: (req, res) => {
    // Do the magic
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    // Do the magic
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    // const producto = products.filter((p) => p.id != req.params.id);
    // res.redirect('/')
  },
};

module.exports = controller;