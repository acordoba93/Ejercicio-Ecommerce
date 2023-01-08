const db = require("../database/models");
const { validationResult } = require('express-validator');
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const usersController = {
  login: (req, res) =>{
    res.render("Login");
  },
  processLogin: (req, res) => {
    let userToLogin = db.User.findByField('email', req.body.email);
    if(userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
      if (isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        if(req.body.remember_user) {
          res.cookie("correo", req.body.email, { maxAge: (1000 * 60) * 20 })
        }
        return res.redirect("/users/profile");
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
    res.render("userProfile", {
      user: req.session.userLogged
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
        console.log({error});
      }
  },
  recuperarPassword: (req, res) =>{
    res.render("RecuperarContraseña");
  },
  create: (req, res) =>{
    const resultValidation = validationResult(req);
    if(resultValidation.isEmpty()){
      db.Product.create({
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
        let userToEdit = await db.Product.findByPk(req.params.id);
        res.render("FormEditarUsuario", { userToEdit });
      } catch (error) {
        console.log({error});
      }
  },
  update: (req, res) => {
    db.User.update({
      nombre: req.body.nombre,
      email : req.body.email,
      password : req.body.password,
    },
    {where: {
      id: req.params.id
      }
    })
    .then(()=> {
      return res.redirect("/users/detail/" + req.params.id)})       // son dos puntos por que retrocede un slash product     
    .catch(error => res.send(error))
  },
  destroy: (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
    then(()=> {
      return res.redirect("/users")})       // son dos puntos por que retrocede un slash product     
    .catch(error => res.send(error));
  },
};
module.exports = usersController;