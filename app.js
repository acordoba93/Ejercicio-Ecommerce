const express = require('express');
const homeRouter = require("./routes/homeRoutes");
const loginRouter = require("./routes/loginRoutes");
const registerRouter = require("./routes/registerRoutes");
const carritoRouter = require("./routes/carritoRoutes");
const detalleRoutes = require("./routes/detalleRoutes");
const path = require("path");
const app = express();

app.set('view engine', 'ejs')

// const loginRouter = require("./routes/login.routes");


app.use(express.static(path.join(__dirname,'public')));

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/carrito-compras', carritoRouter);
app.use('/detalle', detalleRoutes);


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
    console.log("aplicacion corriendo en el puerto 3030");
  });


// app.listen(process.env.PORT || 3000, function(){
//     console.log('Servidor corriendo en el Puerto 3000');
// });
