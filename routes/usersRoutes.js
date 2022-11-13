const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const usersController = require("../controllers/usersController");
const validarUsuarioNuevo = require("../middleware/validarUsuarioNuevo");
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware'); 
const userLogMiddleware = require("../middleware/userLogMiddleware");
const upload = require("../middleware/multerMiddlewareUser");
const admin = require("../middleware/adminMiddleware");

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

/*const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/images/usuarios");
    },
    filename: function(req, file, cb){
        console.log({file})
        cb(null, Date.now() + "" + file.originalname)
    },
});*/

//const uploadFile = multer({ storage });

router.get("/", usersController.index);
router.get("/admin", admin, usersController.admin);

router.get("/login", usersController.login);
router.get("/register", usersController.visualizarRegistro);
router.post("/register", (upload.single('imagen')), validarUsuarioNuevo, usersController.create);
router.get("/detail/:id", usersController.detalle);

router.get("/edit/:id", usersController.edit);
router.put("/edit/:id", (upload.single('imagen')), usersController.update);

router.delete("/delete/:id", usersController.destroy);

router.get("/recuperarPassword", usersController.recuperarPassword);


//muestar el formulario de creacion 
/*router.get("/register", usersController.create);*/

//**Procesa el formulario de creacion
//router.post("/register/id",uploadFile.single("imagenUsuario"), userController.processRegister);
//,upload.single("name del input")**/

//////////
/*
// Formulario de registro
router.get('/register', guestMiddleware, multerMiddlewareUser.register);

// Procesar el registro
router.post('/register', uploadFile.single('images'), validations, usersController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, usersController.profile);

// Logout
router.get('/logout/', usersController.logout);*/


module.exports = router;



