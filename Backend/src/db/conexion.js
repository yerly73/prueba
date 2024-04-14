// db/conexion.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'arizonadb',
    password: '',
    port: 3333,
    dateStrings: true
});

module.exports = pool.promise();
