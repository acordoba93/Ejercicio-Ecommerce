const { Console } = require("console");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));



const registerController = {
  //index: crea la vista q muestre un listado de usuarios y las rutas  
  
  create: function(req, res)  {
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
           res.render("Register");

    //visualizarRegistro: function ( req , res) {
      //  res.render("register")
    },
  procesarFormulario: function(req, res) {
     Console.log(req.file);

    },
  show: function(req,res) {

    }

    
}
module.exports = registerController;