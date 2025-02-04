
const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const apiProductsRoutes = require("./routes/apiRoutes/productsRoutes");
const apiUsersRoutes = require("./routes/apiRoutes/usersRoutes");
const apiCategoriesRoutes = require("./routes/apiRoutes/apiCategoriesRoutes");
const methodOverride = require("method-override");
const session = require('express-session');
const cookies= require("cookie-parser");
const userLoggedMiddleware = require("./middleware/userLoggedMiddleware");
//const cors = require("cors");

app.use((req,res,next)=>{  res.setHeader('Access-Control-Allow-Origin','*');  
res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');  
res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');  next(); })


app.set('view engine', 'ejs')

app.use(session({
  secret: 'secreto!',
  resave: false,
  saveUninitialized: false,
}));

app.use(express.static("./public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"));

app.use('/', mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/api/products", apiProductsRoutes);
app.use("/api/users", apiUsersRoutes);
app.use("/api/categories", apiCategoriesRoutes);


//app.use(cors());


app.use(cookies());

app.use(userLoggedMiddleware);

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
