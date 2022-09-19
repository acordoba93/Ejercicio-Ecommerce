const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require("./routes/mainRoutes");
const productsRouter = require("./routes/productsRoutes");
const methodOverride =  require('method-override');

app.set('view engine', 'ejs')

// const loginRouter = require("./routes/login.routes");


app.use(express.static("./public"));

app.use('/', mainRoutes);
app.use('/login', mainRoutes);
app.use('/register', mainRoutes);
app.use('/carrito', mainRoutes);
app.use('/detail', mainRoutes);
app.use("/products", productsRouter);


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
