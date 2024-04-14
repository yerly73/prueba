//controllers/personalbar.controllers.js
const PersonalModel = require('../models/personal.models');

const getAllPersonales = async (req, res) => {
    try {
        const personales = await PersonalModel.getAllPersonales();
        res.json(personales);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de personales' });
    }
};

const getPersonalById = async (req, res) => {
    const id = req.params.id;

    try {
        const personal = await PersonalModel.getPersonalById(id);
        if (!personal) {
            return res.status(404).json({ error: 'Personal no encontrado' });
        }
        res.json(personal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el personal' });
    }
};

const createPersonal = async (req, res) => {
    const { perfil, estado, nombre, apellido, nro_dni, genero, nacimiento, celular, email, direccion, departamento, provincia, distrito } = req.body;

    try {
        const personalId = await PersonalModel.insertPersonal(perfil, estado, nombre, apellido, nro_dni, genero, nacimiento, celular, email, direccion, departamento, provincia, distrito);
        const newPersonal = await PersonalModel.getPersonalById(personalId);
        res.json(newPersonal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el personal' });
    }
};

const updatePersonal = async (req, res) => {
    const id = req.params.id;
    const { perfil, estado, nombre, apellido, nro_dni, genero, nacimiento, celular, email, direccion, departamento, provincia, distrito } = req.body;

    try {
        const affectedRows = await PersonalModel.updatePersonal(id, perfil, estado, nombre, apellido, nro_dni, genero, nacimiento, celular, email, direccion, departamento, provincia, distrito);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Personal no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el personal' });
    }
};

const deletePersonalById = async (req, res) => {
    const id = req.params.id;

    try {
        const affectedRows = await PersonalModel.deletePersonalById(id);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Personal no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el personal' });
    }
};

module.exports = {
    getAllPersonales,
    getPersonalById,
    createPersonal,
    updatePersonal,
    deletePersonalById
};
