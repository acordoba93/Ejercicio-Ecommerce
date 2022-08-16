const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/Home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/Login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/Register.html');
});

app.get('/shoppingcart', (req,res)=>{
    res.sendFile(__dirname + '/views/ShoppingCart.html');
});

app.get('/detail', (req,res)=>{
    res.sendFile(__dirname + '/views/ProductDetail.html');
});