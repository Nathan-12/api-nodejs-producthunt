const express = require('express')

const app = express();

app.get('/', function(req, res){
    res.send('Hello Nathan !!!');
})

app.listen(3001);