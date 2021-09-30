const express = require('express')
const aplicativo = new express()

aplicativo.get('/', function(req, res){
    res.send("a");
});

aplicativo.get('/sobre', (req, res) => res.send('Ola'));


aplicativo.get('/eu', (req, res) => res.sendFile(__dirname + '/index.html'));

aplicativo.listen(8081);