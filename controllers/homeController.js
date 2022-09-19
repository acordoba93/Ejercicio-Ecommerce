const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const homeController = {
    visualizarHome: function ( req , res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("home", { productos: products });
    },
    search: function (req , res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        let search = req.query.keywords;
        search = search.toLowerCase();

        const resultado = products.filter((p) =>
        p.nombre.toLowerCase().includes(search)
        );
        res.render("resultado", { productos: resultado, search: search });
    },
}
module.exports = homeController;

