const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const express = require("express");
const fs = require("fs");
const path = require("path");
//
const user = require("../models/user")


const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));



const userController = {
  login: (req, res) =>{
    res.render("Login");
    },
  index: (req, res) =>{
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    res.render("user", { usuarios: users });
    },
  visualizarRegistro: function ( req , res) {
      res.render("Register");
    },
  detalle: (req, res) =>{
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    const usuario = users.find((p) => p.id == req.params.id);
    res.render("userDetail", { usuario });

    },
  recuperarPassword: (req, res) =>{
    res.render("RecuperarContraseña");
    },
  create: (req, res) =>{
    const user = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    let errors = validationResult(req);

    if(errors.isEmpty()){

      const userNuevo = {
        id: Date.now(),
        nombre: req.body.nombre,
        nacimiento: req.body.nacimiento,
        genero: req.body.genero,
        celular: req.body.celular,
        email: req.body.email,
        usuario: req.body.usuario,
        password: req.body.password,
        repetir: req.body.repetir,
        imagen: "baner-ova.jpg"
    };
  if(req.file){
    userNuevo.imagen = req.file.filename
  }
    user.push(userNuevo)
  
    const data = JSON.stringify(user, null, " ");
    fs.writeFileSync(usersFilePath, data);
  
    res.redirect("Register");
    }else{
      res.render("Register", 
      { errors: errors.array(),
      old: req.body});
    }
    },
    edit: (req, res) => {
      const user = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
  
      const usuario = user.find((p) => p.id == req.params.id);
  
      res.render("FormEditarUsuario", { userToEdit: usuario });
    },
    update: (req, res) => {
      const user = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
  
      user.forEach(p => {
        if(p.id == req.params.id){
          p.nombre = req.body.nombre,
          p.email = req.body.email,
          p.usuario = req.body.usuario,
          p.genero = req.body.genero,
          p.password = req.body.password
        }
      });
      const data = JSON.stringify(users, null, " ");
      fs.writeFileSync(usersFilePath, data);
  
      res.redirect("/user/detail/" + req.params.id)
    },
    
  destroy: (req, res) => {
    let user = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    user = user.filter((p) => p.id != req.params.id);

    const data = JSON.stringify(user, null, " ");
    fs.writeFileSync(usersFilePath, data);
    res.redirect("/user");
  },
 
  ///////////////////////
  
  register: (req, res) => {
		return res.render('register');
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
		let userInDB = user.findByField('email', req.body.email);
		if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}
		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}
		let userCreated = user.create(userToCreate);
		return res.redirect('/user/login');
	},
	login: (req, res) => {
		return res.render('login');
	},
	loginProcess: (req, res) => {
		let userToLogin = user.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}
				return res.redirect('/user/profile');
			}
			return res.render('login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}
		return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},
	profile: (req, res) => {
		return res.render('userProfile', {
			user: req.session.userLogged
		});
	},
	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}


module.exports = userController;

// const fs = require("fs");
// const path = require("path");

// const usersFilePath = path.join(__dirname, "../data/users.json");
// const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// const loginController = {
//     visualizarLogin: function ( req , res) {
//         res.render("login")
//     },



// // proceso de login, leer los usuarios y verifica la contraseña

// login: function (req, res) {
//        return res.render('home');
// },

// logueado: function(req, res){
//     console.log("login exitoso");
//     return res.render('usuarioLogueado');
// },

// processLogin: function(req, res) {
//     let errors = validationResult(req);
//     if (errors.isEmpty()) {
//         let usersJSON = fs.readFileSync('users.json', { encoding: "UTF-8"})
//         let users;
//         if (usersJSON == "") {
//             users = [];
//         } else {
//             users = JSON.parce(usersJSON);
//         }
//         for (let i = 0; i < users.length; i++) {
//             if (users[i].userName == req.body.urerName) {
//                 if (bcrypt.compareSync(req.body.password, users[i].password))
//                      usuarioALoguearse = users[i];
//                     break;
//                }
//            }
                
//         }
//         if (usuarioALoguearse == undefined) {
//             return res.render('login', {errors: [
//                 {msg: 'Credenciales invalidas'}
//             ]});
            
        
//         req.session.usuarioLogueado = usuarioALoguearse;    
//     } else {
//         return res.render('login', {errors: errors.errors});
//     }
// }

// }

// module.exports = loginController;