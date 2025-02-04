const { body } = require("express-validator");

const validaciones = [
    body("nombre").isString().withMessage("debe ser solo letras").bail()
    .isLength({min:3}).withMessage("debe tener por lo menos 3 letras").bail()
    .isLength({max:15}).withMessage("debe tener como maximo 15 letras"),
    
    body("descripcion").isLength({min:4}).withMessage("debe tener por lo menos 4 letras").bail()
    .isString().withMessage("debe ser solo letras"),

    body("talle").isLength({max:3}).withMessage("maximo 3 letras"),

    body("precio").isNumeric().withMessage("el precio debe ser un valor numerico"),

    body("categoria").notEmpty().withMessage("el nuevo producto debe estar en una de las 2 categorías").bail()
   
];


module.exports = validaciones;