const express = require('express');
const app = express();
const mainRoutes = require("./routes/mainRoutes");

app.set('view engine', 'ejs')

// const loginRouter = require("./routes/login.routes");


app.use(express.static("./public"));

app.use('/', mainRoutes);
app.use('/login', mainRoutes);
app.use('/register', mainRoutes);
app.use('/carrito', mainRoutes);
app.use('/detail', mainRoutes);


// app.get('/login', loginController);

// app.get('/register', (req,res)=>{
//     res.sendFile(__dirname + '/views/Register.html');
// });

// app.get('/shoppingcart', (req,res)=>{
//     res.sendFile(__dirname + '/views/ShoppingCart.html');
// });

// app.get('/detail', (req,res)=>{
//     res.sendFile(__dirname + '/views/ProductDetail.html');
// });

app.listen(3000, () => {
    console.log("aplicacion corriendo en el puerto 3000");
  });


// app.listen(process.env.PORT || 3000, function(){
//     console.log('Servidor corriendo en el Puerto 3000');
// });
