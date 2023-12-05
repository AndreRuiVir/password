const TemaModel = require("../models/temas");
const temas = require("../models/temas")

class TemasController {
    static async indexGet(req, res){
        let data = await temas.consultar();
        res.send(data);
    } 
    static async itemGet(req,res){
        let id = req.params.id;
        let data = await TemaModel.consultarPorID(id);
        if(data.length==0){
            res.status(404).send({errno:404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }
}

module.exports = TemasController;