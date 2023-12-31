const fs = require('fs');
const knex = require("knex");

async function connectMysql() {
    const mysqlPassword = await fs.promises.readFile('/run/secrets/mysql_password');
    const db = knex({
        client: 'mysql2',
        connection: {
            host : "mysql", //Nombre del docker-compose service
            user : "user_pass",
            password : mysqlPassword,
            database : "passwords"
        }
    });
    return db;
}

module.exports = {
    connectMysql
};