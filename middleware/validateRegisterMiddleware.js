const path = require("path");
const { body } = require("express-validator");



const validations =  [
        body("nombre").notEmpty().withMessage("debe estar completo"),
        body("nacimiento").notEmpty().withMessage("debe colocar una fecha de nacimiento"),
        body("genero").notEmpty().withMessage("debe selecconar una de las 3 opciones disponibles"),
        body("celular").notEmpty().withMessage("debe colocar un telefono de contacto"),
        body("email").notEmpty().withMessage("debe colocar una direccion de correo"),
        body("usuario").notEmpty().withMessage("debe tener un usuario"),
        body("password").notEmpty().withMessage("debe tener una contraseña"),
        body("repetir").notEmpty().withMessage("debe repetir la contraseña creada")
        ];


    
    
    module.exports = validations;
    
    /*body('fullName').notEmpty().withMessage('Tienes que escribir un nombre').bail(),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').isEmail().withMessage('Debes escribir un formato de correo valido').bail(),
    body('password').notEmpty().withMessage('tienes que escribir una contraseña').bail(),
    body('contry').notEmpty().withMessage('Tienes que elegir un pais').bail(),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.pgn', '.gif'];

        if(!file) {
            throw new Error('Tiene que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    })*/



