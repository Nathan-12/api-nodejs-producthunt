const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando o App
const app = express();

//Iniciando o Banco de dados
mongoose.connect('mongodb://localhost:27017/nodejs', 
{ useNewUrlParser:true, useUnifiedTopology: true });


requireDir('./src/models');

const Product = mongoose.model('Product');

//Crian a primeira rota
app.get('/', (req, res) =>{
    
    Product.create({
        title: 'Nathan',
        description: 'Github Nathan',
        url: 'github.com/Nathan-12'
    });
    
    return res.send('Hello Nathan !!!');
})

app.listen(3001);