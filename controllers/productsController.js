const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    // Do the magic
    res.render("products", { productos: products });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const producto = products.find((p) => p.id == req.params.id);
    res.render("detail", { producto: producto });
  },

  // Create - Form to create
  create: (req, res) => {
    // Do the magic
  },

  // Create -  Method to store
  store: (req, res) => {
    // Do the magic
    // obter el producto del body
    // Date.now() // 123456789
    // default-image.png
    // guardan en el json
    // redirect
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