const express = require('express');
const app = express();

const usuariosController = require('./controllers/usuariosController');
const brechas_seguridadController = require('./controllers/brechas_seguridadController');
const informacion_aplicacionController = require('./controllers/informacion_aplicacionController');
const usuarios_brechasController = require('./controllers/usuarios_brechasController');
const puerto = 80;

app.use(express.json());


app.get("/", function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hola, se hizo conexión");
});


app.get('/usuarios/:id([0-9]+)', usuariosController.itemGet);
app.get('/usuarios',usuariosController.indexGet);
app.get('/brechas_seguridad', brechas_seguridadController.indexGet);
app.get('/informacion_aplicacion', informacion_aplicacionController.indexGet);
app.get('/usuarios_brechas', usuarios_brechasController.indexGet);

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");
});