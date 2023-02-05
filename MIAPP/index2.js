var express = require('express');
 var app = express();
 app.use(express.json());
 app.use(express.urlencoded());


 app.get('/',function(req,res){
    const path = require('path');
    res.sendFile(path.join(__dirname+'/json.html'));
 });

 app.get('/saludo', function(requ, res) {
    res.send('Solicitud de saludo recibida David Sanchez Vazquez!');
 });

 app.post('/respuesta', function (req, res) {
    res.send("Nombre ingresado: "+req.body.nombre);
    console.log("Información enviada");
 });

 app.listen(8000, function(){
    console.log('Servidor corriendo en el puerto 8000');
 });
