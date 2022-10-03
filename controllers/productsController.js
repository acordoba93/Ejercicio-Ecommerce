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
    res.render("ProductDetail", { producto});
  },
  create: function(req, res) {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.render("FormCrearProducto");
  },
  store: (req, res) => {

    console.log("//////////////");
    console.log(req.body);
    console.log("///////////////");

    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    const productoNuevo = {
      id: Date.now(),
      nombre: req.body.name,
      descripcion: req.body.descripcion,
      talle: req.body.talle,
      precio: req.body.precio,
      imagen: "remera-rtk.2.jpg",
      categoria: req.body.categoria
    };

    products.push(productoNuevo)

    const data = JSON.stringify(products, null, " ");
    fs.writeFileSync(productsFilePath, data);

    res.redirect("/products/create");

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

    res.redirect("/products/detalle/" + req.params.id)
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