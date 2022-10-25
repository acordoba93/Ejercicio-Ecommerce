const { body } = require("express-validator");

const validaciones = [
    body("nombre").isEmpty().withMessage("debe tener un nombre").bail()
    .isString().withMessage("debe ser solo letras").bail()
    .isLength({min:3}).withMessage("debe tener por lo menos 3 letras").bail()
    .isLength({max:15}).withMessage("debe tener como maximo 15 letras"),
    
    body("descripcion").isEmpty().withMessage("debe tener una descripcion").bail()
    .isString().withMessage("debe ser solo letras")
]


module.exports = validaciones;