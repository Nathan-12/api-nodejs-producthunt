const express = require('express')
const mongoose = require('mongoose')

//Iniciando o App
const app = express();

//Iniciando o Banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser:true, useUnifiedTopology: true });

//Crian a primeira rota
app.get('/', function(req, res){
    res.send('Hello Nathan !!!');
})

app.listen(3001);