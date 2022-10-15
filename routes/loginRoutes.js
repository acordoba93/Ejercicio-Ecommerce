const express = require("express");
const router = express.Router();
const loginController = require('../controllers/loginController');
const {body} = require('express-validator');

//pagina de login, validar un formulario, por post validar alguno de los campos
router.get('/login', loginController.login);
router.post('/usuarioLogueado', loginController.logueado);
router.post('/login', [
    body('userName').isString().withMessage('userName invalido'),
    body('password').isLength({min: 8}).withMessage('La contraseña debe tener 8 caracteres'),
] ,loginController.processLogin);

router.get('/body', function(req, res) {
    if (req.session.usuarioLogueado == undefined) {
        res.send("No estas logueado");
    } else {
        res.send("El usuario logueado es" + req.session.usuarioLogueado.userName);
    }
})

//let usuarioNoLogueado = require('../middlewares/usuarioNoLogueado');

module.exports = router;
