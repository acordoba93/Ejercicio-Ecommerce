const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const validaciones = require("../middleware/validarProductoNuevo");
const upload = require("../middleware/multerMiddlewareProduct");

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
router.post("/create", upload.single('imagenProducto'), validaciones, productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detalle);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", upload.single('imagenProducto'), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productsController.destroy);

module.exports = router;