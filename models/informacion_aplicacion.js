const { connectMysql } = require('../src/dbconnection');
class Informacion_AplicacionModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('Informacion_Aplicacion');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Informacion_Aplicacion').where('id_informacion', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Informacion_Aplicacion').insert(datos).returning('id_informacion');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Informacion_Aplicacion').where('id_informacion', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_informacion'] = id;
        await db.where('id_informacion', id).del();
        await db.insert(newData).into('Informacion_Aplicacion');
        return id;
    }
}

module.exports = Informacion_AplicacionModel;