const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const loginController = {
    visualizarLogin: function ( req , res) {
        res.render("login")
    },



// proceso de login, leer los usuarios y verifica la contraseña

login: function (req, res) {
       return res.render('home');
},

logueado: function(req, res){
    console.log("login exitoso");
    return res.render('usuarioLogueado');
},

processLogin: function(req, res) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
        let usersJSON = fs.readFileSync('users.json', { encoding: "UTF-8"})
        let users;
        if (usersJSON == "") {
            users = [];
        } else {
            users = JSON.parce(usersJSON);
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].userName == req.body.urerName) {
                if (bcrypt.compareSync(req.body.password, users[i].password))
                     usuarioALoguearse = users[i];
                    break;
               }
           }
                
        }
        if (usuarioALoguearse == undefined) {
            return res.render('login', {errors: [
                {msg: 'Credenciales invalidas'}
            ]});
            
        
        req.session.usuarioLogueado = usuarioALoguearse;    
    } else {
        return res.render('login', {errors: errors.errors});
    }
}

}

module.exports = loginController;