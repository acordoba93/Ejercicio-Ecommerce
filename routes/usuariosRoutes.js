const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require ("multer");
const usuariosController = require("../controllers/registerController");

const storage = multer.diskStorage ({
    destination: function (req, file, cb) {
   cb (null, "../public/images/usuarios")
   //(null, path.join(__dirname, "../public/images/usuarios")) 
   },
    filename: function (req,file,cb) {
      console.log(file);
    //const newFilename = "" + Date.now() + path.extname(file.originalname); 
    cb (null, Date.now() + "" + file.originalname)
    //cb(null, newFilename),  
    }    
});

const upload = multer ({storage});

//muetra un listado de usuario
//router.get("/usuariosIndex",usuariosController.index)

//muestar el formulario de creacion 
router.get("/", usuariosController.create);

//Procesa el formulario de creacion
router.post("/register/id",upload.single("imagenUsuario"), usuariosController.procesarFormulario);
//,upload.single("name del input")//

//detallede un usuario
router.get("/Register/:id",usuariosController.show)
module.exports = router;
