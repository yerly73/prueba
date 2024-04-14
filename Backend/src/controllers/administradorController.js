// controllers/AdministradorController.js
const AdministradorModel = require('../models/administradorModel');
const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require ('jsonwebtoken');
const secret = 'Tecsup';


const cleanBufferFields = (results) => {
    return results.map(admin => {
        const { _buf, ...cleanAdmin } = admin;
        return cleanAdmin;
    });
};

const getAllAdministradores = async (req, res) => {
    try {
        const administradores = await AdministradorModel.getAllAdministradores();
        const cleanedAdministradores = cleanBufferFields(administradores);
        res.json(cleanedAdministradores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de administradores' });
    }
};

const getAdministradorById = async (req, res) => {
    const id = req.params.id;

    try {
        const administrador = await AdministradorModel.getAdministradorById(id);
        if (!administrador) {
            return res.status(404).json({ error: 'Administrador no encontrado' });
        }
        const cleanedAdministrador = cleanBufferFields([administrador]);
        res.json(cleanedAdministrador[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el administrador' });
    }
};


const createAdministrador = async (req, res) => {
    const { email, contrasena, username, role } = req.body;

    try {
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(contrasena, saltRounds);
        // Insertar el administrador con la contraseña encriptada
        const administradorId = await AdministradorModel.insertAdministrador(email, hashedPassword, username, role);
        // Obtener los detalles del administrador recién creado
        const newAdministrador = await AdministradorModel.getAdministradorById(administradorId);
        // Crear el JWT
        const token = jwt.sign({ id: administradorId, email, role }, secret, { expiresIn: '1h' });
        // Eliminar la contraseña encriptada de la respuesta
        //const { contrasena: _, ...adminData } = newAdministrador;
        // Incluir la contraseña encriptada en la respuesta
        const adminData = { ...newAdministrador, contrasena: hashedPassword, token };

        res.json(adminData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el administrador' });
    }
};


const updateAdministrador = async (req, res) => {
    const id = req.params.id;
    const { email, contrasena , username, role} = req.body;

    try {
        const affectedRows = await AdministradorModel.updateAdministrador(id, email, contrasena, username, role);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Administrador no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el administrador' });
    }
};

const deleteAdministradorById = async (req, res) => {
    const id = req.params.id;

    try {
        const affectedRows = await AdministradorModel.deleteAdministradorById(id);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Administrador no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el administrador' });
    }
};

//login
const loginAdministrador = async (req, res) => {
    const { email, contrasena } = req.body;
    try {
        // Buscar el administrador por su correo electrónico
        const administrador = await AdministradorModel.findByEmail(email);

        if (!administrador) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }
        // Verificar la contraseña
        const isMatch = await bcrypt.compare(contrasena, administrador.contrasena);
        if (!isMatch) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }
        // Si las credenciales son correctas, devolver una confirmación
        res.json({ success: true, message: 'Inicio de sesión exitoso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al intentar iniciar sesión' });
    }
};

module.exports = {
    getAllAdministradores,
    getAdministradorById,
    createAdministrador,
    updateAdministrador,
    deleteAdministradorById,
    loginAdministrador,
};
