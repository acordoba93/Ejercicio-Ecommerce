const db = require("../database/models");

const mainController = {
  visualizarHome: async (req, res) => {

    let products = await db.Product.findAll()
    let productosEnOferta = await db.Product.findAll()
    let productosPrecioDeLista = await db.Product.findAll()
    return res.render("home", { products, productosEnOferta, productosPrecioDeLista });
    
    },
}


module.exports = mainController;

