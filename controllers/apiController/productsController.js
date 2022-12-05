const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.json({ products });
  },
}

module.exports = controller;