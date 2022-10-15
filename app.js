const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const usuariosRoutes = require("./routes/usuariosRoutes");
const loginRoutes = require("./routes/loginRoutes");
const methodOverride = require("method-override");
const session = require('express-session');


app.set('view engine', 'ejs')


app.use(express.static("./public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"));

app.use('/', mainRoutes);
app.use('/login', mainRoutes);
app.use('/register', usuariosRoutes);
app.use('/carrito', mainRoutes);
app.use("/products", productsRoutes);
//app.use("/usuarioLogueado", loginRoutes);

//app.use('/login', loginRouter);
//app.use(session({secret: 'secreto!'}));

//app.use(cookieParser())

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

app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => {
    console.log("aplicacion corriendo en el puerto 3000");
  });

module.exports = app;




// app.listen(process.env.PORT || 3000, function(){
//     console.log('Servidor corriendo en el Puerto 3000');
// });
