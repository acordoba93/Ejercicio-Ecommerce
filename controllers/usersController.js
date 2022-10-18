const { Console } = require("console");
const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));



const usersController = {
  visualizarRegistro: function ( req , res) {
      res.render("Register");
    },
  recuperarPassword: (req, res) =>{
    res.render("RecuperarContraseña");
    },
  create: (req, res) =>{
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    const userNuevo = {
      id: Date.now(),
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
      celular: req.body.celular,
      nacimiento: req.body.nacimiento,
      email: req.body.email,
      password: req.body.password,
      repetir: req.body.repetir,
      imagen: "remera-rtk.2.jpg",
      genero: req.body.genero
  };
  users.push(userNuevo)

  const data = JSON.stringify(users, null, " ");
  fs.writeFileSync(usersFilePath, data);

  res.redirect("/login");

    },
  procesarFormulario: function(req, res) {
     Console.log(req.file);
    },
  show: function(req,res) {

    }

    
}
module.exports = usersController;