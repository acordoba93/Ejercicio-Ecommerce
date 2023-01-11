const db = require("../../database/models");
//const fs = require("fs");
//const path = require("path");

//const productsFilePath = path.join(__dirname, "../../data/products.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
  index: async (req, res) => {
    const products = db.Product.findAll();
    Promise.all([products])
        .then(products => {
            return res.status(200).json({
                status: 200,
                qty: products[0].length,
                products : products
            });
        })
        .catch(errors => {
            return res.json({
                message: errors,
            });
        })
}    //let productos = await db.Product.findAll()
    //return res.json({ productos });
  ,
  quantity: async (req, res) =>{
    let productos = await db.Product.count()
    console.log(productos);
    return res.json({ productos});

  },
  lastProduct: (req, res) => {
    let product = db.Product.findAll({
      order : [["product_id","DESC"]], 
      limit : 1
    })
			.then(product => {
				return res.status(200).json({
					status: 200,
					product: product
				})
			})
			.catch(errors => {
				return res.json({
					message: errors
				})
			});
	}
  };

module.exports = productController;