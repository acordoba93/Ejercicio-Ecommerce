const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const path = require("path");
const multer = require("multer");
const userController = require("../controllers/userController");
//MIDDLEWARE//
const uploadFile = require("../middleware/multerMiddleware");
const validations =  require("../middleware/validateRegisterMiddleware");
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');


// ... validaciones ... //

/*const validarUsuarioNuevo = [
    body("nombre").notEmpty().withMessage("debe estar completo"),
    body("nacimiento").notEmpty().withMessage("debe colocar una fecha de nacimiento"),
    body("genero").notEmpty().withMessage("debe selecconar una de las 3 opciones disponibles"),
    body("celular").notEmpty().withMessage("debe colocar un telefono de contacto"),
    body("email").notEmpty().withMessage("debe colocar una direccion de correo"),
    body("usuario").notEmpty().withMessage("debe tener un usuario"),
    body("password").notEmpty().withMessage("debe tener una contraseña"),
    body("repetir").notEmpty().withMessage("debe repetir la contraseña creada")
];*/

// ***********  MULTER  ***********
//const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/images/usuarios");
    },
    filename: function(req, file, cb){
        console.log({file})
        cb(null, Date.now() + "" + file.originalname)
    },
});

//const uploadFile = multer({ storage });

//router.get("/", userController.index);

router.get("/login", userController.login);
router.get("/register", userController.visualizarRegistro);
//
router.get("/register", userController.register);
//router.post("/register", uploadFile.single("imagen"), validarUsuarioNuevo, userController.processRegister);
router.get("/detail/:id", userController.detalle);

router.get("/edit/:id", userController.edit);
router.put("/edit/:id", userController.update);

router.delete("/delete/:id", userController.destroy);

router.get("/recuperarPassword", userController.recuperarPassword);


//muestar el formulario de creacion 
router.get("/register", userController.create);

//**Procesa el formulario de creacion
//router.post("/register/id",uploadFile.single("imagenUsuario"), userController.processRegister);
//,upload.single("name del input")**/

//////////

// Formulario de registro
router.get('/register', guestMiddleware, userController.register);

// Procesar el registro
router.post('/register', uploadFile.single('images'), validations, userController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, userController.login);

// Procesar el login
router.post('/login', userController.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, userController.profile);

// Logout
router.get('/logout/', userController.logout);

module.exports = router;




// const express = require("express");
// const router = express.Router();
// const loginController = require('../controllers/loginController');
// const {body} = require('express-validator');

// //pagina de login, validar un formulario, por post validar alguno de los campos
// router.get('/login', loginController.login);
// router.post('/usuarioLogueado', loginController.logueado);
// router.post('/login', [
//     body('userName').isString().withMessage('userName invalido'),
//     body('password').isLength({min: 8}).withMessage('La contraseña debe tener 8 caracteres'),
// ] ,loginController.processLogin);

// router.post('/body', function(req, res) {
//     if (req.session.usuarioLogueado == undefined) {
//         res.send("No estas logueado");
//     } else {
//         res.send("El usuario logueado es" + req.session.usuarioLogueado.userName);
//     }
// })

// //let usuarioNoLogueado = require('../middlewares/usuarioNoLogueado');

// module.exports = router;