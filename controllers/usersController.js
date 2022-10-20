const { Console } = require("console");
const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));



const usersController = {
  index: (req, res) =>{
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    res.render("users", { usuarios: users });
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
      imagen: "baner-ova.jpg",
      genero: req.body.genero
  };
if(req.file){
  userNuevo.imagen = req.file.filename
}
  users.push(userNuevo)

  const data = JSON.stringify(users, null, " ");
  fs.writeFileSync(usersFilePath, data);

  res.redirect("/login");

    },
    edit: (req, res) => {
      const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
  
      const usuario = users.find((p) => p.id == req.params.id);
  
      res.render("FormEditarUsuario", { userToEdit: usuario });
    },
    update: (req, res) => {
      const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
  
      users.forEach(p => {
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
  
      res.redirect("/users/detail/" + req.params.id)
    },
    
  destroy: (req, res) => {
    let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    users = users.filter((p) => p.id != req.params.id);

    const data = JSON.stringify(users, null, " ");
    fs.writeFileSync(usersFilePath, data);
    res.redirect("/users");
  },
  };

module.exports = usersController;