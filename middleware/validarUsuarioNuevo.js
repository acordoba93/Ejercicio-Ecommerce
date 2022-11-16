const { body, check } = require("express-validator");
const bcryptjs = require("bcryptjs");

const validarUsuarioNuevo = [
    body("nombre").notEmpty().withMessage("debe poseer Nombre y Apellido"),
    body("nacimiento").notEmpty().withMessage("debe colocar una fecha de nacimiento"),
    body("pais").notEmpty().withMessage("debe seleccionar una de las opciones disponibles"),
    body("celular").notEmpty().withMessage("debe colocar un telefono de contacto"),
    body("email").notEmpty().withMessage("debe colocar una direccion de correo"),
    body("usuario").notEmpty().withMessage("debe tener un usuario"),
    body("password").notEmpty().withMessage("debe tener una contraseña"),
    body("repetir").notEmpty().withMessage("debe repetir la contraseña creada"),
    check("repetir").custom(async(repetir, {req}) =>{
        const password = req.body.password

        if(password !== repetir){
            throw new Error("la contraseña no coincide")
        }
    })


]

//let contrasenaUno = bcryptjs.hash(req.body.password, 10);
//console.log(body{"password"});
//let contrasenaDos = bcryptjs.hash(req.body.repetir, 10);
//console.log(contrasenaDos);

//if(contrasenaUno != contrasenaDos){
//   return res.render('Register', {
// 				errors: {
// 					repetir: {
// 						msg: "las contraseñas deben ser iguales"
// 					}
// 				},

// 			});
// 		};

// ;

module.exports = validarUsuarioNuevo;