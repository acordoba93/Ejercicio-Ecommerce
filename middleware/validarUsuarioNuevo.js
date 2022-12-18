const { body, check } = require("express-validator");
const bcryptjs = require("bcryptjs");

const validarUsuarioNuevo = [
    body("nombre").isString().withMessage("Solo debe contener Letras").bail()
    .isLength({min:3}).withMessage("El campo Nombre Completo, debe contener al menos 3 letras").bail()
    .isLength({max:15}).withMessage("El campo Nombre Completo, debe contener como máximo 15 letras"),

    body("nacimiento").notEmpty().withMessage("debe colocar una fecha de nacimiento"),

    body("pais").notEmpty().withMessage("debe seleccionar una de las opciones disponibles"),

    body("celular").isLength({min:8}).withMessage("Debe contener al menos 8 números").bail()
    .isLength({max:10}).withMessage("Debe contener como máximo 10 números"),

    body("email").isEmail().withMessage("debe colocar una Dirección de Correo válida"),

    body("password").isLength({min:5}).withMessage("debe contener al menos 5 caracteres").bail()
    .isLength({max:10}).withMessage("debe contener como máximo 10 caracteres"),

    body("repetir").notEmpty().withMessage("debe repetir la contraseña creada"),
    check("repetir").custom(async(repetir, {req}) =>{
        const password = req.body.password

        if(password !== repetir){
            throw new Error("la contraseña no coincide")
        }
    })
]

module.exports = validarUsuarioNuevo;