const express = require('express');

const homeRouter = require("./routes/home.routes");
const loginRouter = require("./routes/login.routes");

const app = express();
app.use(express.static('public'));

app.set("view engine", "ejs");


app.get('/', homeController);

app.get('/login', loginController);

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/Register.html');
});

app.get('/shoppingcart', (req,res)=>{
    res.sendFile(__dirname + '/views/ShoppingCart.html');
});

app.get('/detail', (req,res)=>{
    res.sendFile(__dirname + '/views/ProductDetail.html');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el Puerto 3000');
});
