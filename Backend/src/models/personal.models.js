//models/personal.models.js
const db = require('../db/conexion');

const getAllPersonales = async () => {
    const query = 'SELECT * FROM personales';
    const [rows] = await db.query({ sql: query, rowsAsArray: false });
    return rows;
};

const getPersonalById = async (id) => {
    const query = 'SELECT * FROM personales WHERE id = ?';
    const [result] = await db.query(query, [id]);
    return result[0];
};

const insertPersonal = async (perfil, estado, nombre, apellido, nro_dni, genero, nacimiento, celular, email, direccion, departamento, provincia, distrito) => {
    const query = 'INSERT INTO personales (perfil, estado, nombre, apellido, nro_dni, genero, nacimiento, celular, email, direccion, departamento, provincia, distrito) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [perfil, estado, nombre, apellido, nro_dni, genero, nacimiento, celular, email, direccion, departamento, provincia, distrito]);
    return result.insertId;
};

const updatePersonal = async (id, perfil, estado, nombre, apellido, nro_dni, genero, nacimiento, celular, email, direccion, departamento, provincia, distrito) => {
    const query = 'UPDATE personales SET perfil = ?, estado = ?, nombre = ?, apellido = ?, nro_dni = ?, genero = ?, nacimiento = ?, celular = ?, email = ?, direccion = ?, departamento = ?, provincia = ?, distrito = ? WHERE id = ?';
    const [result] = await db.query(query, [perfil, estado, nombre, apellido, nro_dni, genero, nacimiento, celular, email, direccion, departamento, provincia, distrito, id]);
    return result.affectedRows;
};

const deletePersonalById = async (id) => {
    const query = 'DELETE FROM personales WHERE id = ?';
    const [result] = await db.query(query, [id]);
    return result.affectedRows;
};

const findByEmail = async (email) => {
    try {
        const query = 'SELECT * FROM personales WHERE email = ?';
        const [rows] = await db.query(query, [email]);
        return rows[0];
    } catch (error) {
        console.error('Error en findByEmail:', error);
        throw error;
    }
};

module.exports = {
    getAllPersonales,
    getPersonalById,
    insertPersonal,
    updatePersonal,
    deletePersonalById,
    findByEmail,
};
