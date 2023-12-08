const express = require('express');
const app = express();

const usuariosController = require('../controllers/usuariosController');
const brechas_seguridadController = require('../controllers/brechas_seguridadController');
const informacion_aplicacionController = require('../controllers/informacion_aplicacionController');
const usuarios_brechasController = require('../controllers/usuarios_brechasController');
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

app.post('/usuarios', usuariosController.indexPost);
app.patch('/usuarios/:id([0-9]+)', usuariosController.itemPatch);
app.put('/usuarios/:id([0-9]+)', usuariosController.itemPut);

app.post('/brechas_seguridad', brechas_seguridadController.indexPost);
app.patch('/brechas_seguridad/:id([0-9]+)', brechas_seguridadController.itemPatch);
app.put('/brechas_seguridad/:id([0-9]+)', brechas_seguridadController.itemPut);

app.post('/informacion_aplicacion', informacion_aplicacionController.indexPost);
app.patch('/informacion_aplicacion/:id([0-9]+)', informacion_aplicacionController.itemPatch);
app.put('/informacion_aplicacion/:id([0-9]+)', informacion_aplicacionController.itemPut);

app.post('/usuarios_brechas', usuarios_brechasController.indexPost);
app.patch('/usuarios_brechas/:id([0-9]+)', usuarios_brechasController.itemPatch);
app.put('/usuarios_brechas/:id([0-9]+)', usuarios_brechasController.itemPut);



app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");
});