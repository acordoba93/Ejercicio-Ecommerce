const db = require("../database/models");
const { validationResult } = require('express-validator');
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const bcryptjs = require('bcryptjs');

const usersController = {
  login: (req, res) =>{
    res.render("Login");
  },
  processLogin: async (req, res) => {
    let userToLogin = await db.User.findOne({
      where: {
        email: req.body.email
        }
    })

    if(userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);

      if (isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        if(req.body.remember_user) {
          res.cookie("correo", req.body.email, { maxAge: (1000 * 60) * 20 })
        }
        let usuario = await db.User.findByPk(req.params.id);
        console.log("userToLogin", userToLogin)
        //console.log(usuario);
      res.render("userProfile", { usuario: userToLogin.toJSON() });

      }
      return res.render('Login', {
        errors: {
          password: {
            msg: 'Las credenciales son inválidas'
          }
        }
      });
    }
    return res.render('Login', {
      errors: {
        email: {
          msg: 'No se encuentra este email en nuestra base de datos'
        }
      }
 });

   },
  admin: (req, res) => {
    res.send("Hola Administrador: " + req.query.user);
  },
  profile: (req, res) => {
    console.log("usuario logueado", req.session.userLogged)
    res.render("userProfile", {
    
      usuario: req.session.userLogged
    });
  },
  index: async (req, res) =>{
    let usuarios = await db.User.findAll()
    return res.render("users", { usuarios });
  },
  visualizarRegistro: function ( req , res) {
    res.render("Register");
  },
  detalle: async (req, res) => {
      try {
        let usuario = await db.User.findByPk(req.params.id);
        res.render("userProfile", { usuario });
      } catch (error) {
        console.log(error);
      }
  },
  recuperarPassword: (req, res) =>{
    res.render("RecuperarContraseña");
  },
  create: (req, res) =>{
    const resultValidation = validationResult(req);
    if(resultValidation.isEmpty()){
      db.User.create({
      nombre: req.body.nombre,
      nacimiento: req.body.nacimiento,
      pais: req.body.pais,
      celular: req.body.celular,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      imagen: req.file ? req.file.filename : 'ova-logo.jpg',
      })
      .then(()=> {
        return res.redirect("/users")})
      .catch(error => res.send(error))
    }else{
      return res.render('Register', {
      errors: resultValidation.mapped(),
      oldData: req.body
      })
    }
  },
  edit: async (req, res) => {
      try {
        let userToEdit = await db.User.findByPk(req.params.id);
        res.render("FormEditarUsuario", { userToEdit });
      } catch (error) {
        console.log(error);
      }
  },
  update : async function (req, res) {
    try {
      const newUser = await db.User.update({
        nombre: req.body.nombre,
        email : req.body.email,
        password : req.body.password
      },{
        where: {
          usuario_id: req.params.id
        }
      });
        res.redirect('/users');
    } catch (error) {
      console.log(error);
    }
  },
  destroy: async (req, res) => {
    try {
      await db.User.destroy({
        where: {
          usuario_id: req.params.id
        }});
        let usuarios = await db.User.findAll();
        res.redirect("/users");
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = usersController;