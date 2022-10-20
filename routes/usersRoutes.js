const express = require("express");
const router = express.Router();
const path = require("path");

// ***********  MULTER  ***********
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/images/usuarios");
    },
    filename: function(req, file, cb){
        console.log({file})
        cb(null, Date.now() + "" + file.originalname)
    },
});

const upload = multer({storage});



const usersController = require("../controllers/usersController");

router.get("/", usersController.index);
router.get("/register", usersController.visualizarRegistro);
router.post("/register", upload.single("imagen"), usersController.create);
router.get("/detail/:id", usersController.detalle);

router.get("/edit/:id", usersController.edit);
router.put("/edit/:id", usersController.update);

router.delete("/delete/:id", usersController.destroy);

router.get("/recuperarPassword", usersController.recuperarPassword);







//muetra un listado de usuario
//router.get("/usuariosIndex",usuariosController.index)

//muestar el formulario de creacion 
//router.get("/", usuariosController.create);

//Procesa el formulario de creacion
//router.post("/register/id",upload.single("imagenUsuario"), usuariosController.procesarFormulario);
//,upload.single("name del input")//

//detallede un usuario
//router.get("/Register/:id",usuariosController.show)

module.exports = router;
