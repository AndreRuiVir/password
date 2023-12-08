const { connectMysql } = require('../dbconnection');
class Brechas_SeguridadModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('brechas_seguridad');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('brechas_seguridad').where('id_brecha', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('brechas_seguridad').insert(datos).returning('id_brecha');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('brechas_seguridad').where('id_brecha', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_brecha'] = id;
        await db.where('id_brecha', id).del();
        await db.insert(newData).into('brechas_seguridad');
        return id;
    }
}

module.exports = Brechas_SeguridadModel;