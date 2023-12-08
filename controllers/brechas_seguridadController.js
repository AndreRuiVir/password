const brechas_seguridadModel = require("../models/brechas_seguridad");
const brechas_seguridad = require("../models/brechas_seguridad")

class brechas_seguridadController {
    static async indexGet(req, res){
        let data = await brechas_seguridad.consultar();
        res.send(data);
    } 
    static async itemGet(req,res){
        let id = req.params.id;
        let data = await brechas_seguridadModel.consultarPorID(id);
        if(data.length==0){
            res.status(404).send({errno:404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await brechas_seguridadModel.insertar(newData);

            res.status(201)
                .header('Location', `/brechas_seguridad/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
    static async itemPut(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;

            const result = await brechas_seguridadModel.reemplazar(id, updatedData);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Updated successfully'});
            }
        } catch (error) {
            res.status(400).send({ errno: 400, error: 'Bad Request'});
        }
    }
    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            const result = await brechas_seguridadModel.actualizar(id, updatedFields);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfull partial update'});
            }
        } catch (error) {
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = brechas_seguridadController;