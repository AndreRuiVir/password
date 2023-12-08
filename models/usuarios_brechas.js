const { connectMysql } = require('../src/dbconnection');
class usuarios_brechasModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('usuarios_brechas');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('usuarios_brechas').where('id_relacion', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('usuarios_brechas').insert(datos).returning('id_relacion');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('usuarios_brechas').where('id_relacion', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_informacion'] = id;
        await db.where('id_relacion', id).del();
        await db.insert(newData).into('usuarios_brechas');
        return id;
    }
}

module.exports = usuarios_brechasModel;