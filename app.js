const express = require('express');
const homeRouter = require("./routes/mainRoutes");
const path = require("path");
const app = express();

app.set('view engine', 'ejs')

// const loginRouter = require("./routes/login.routes");


app.use(express.static(path.join(__dirname,'public')));

app.use('/', homeRouter);


app.listen(3000, () => {
    console.log("aplicacion corriendo en el puerto 3030");
  });


// app.listen(process.env.PORT || 3000, function(){
//     console.log('Servidor corriendo en el Puerto 3000');
// });
