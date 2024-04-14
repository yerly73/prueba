// routes/AdministradorRoutes.js
    const express = require('express');
    const administradorController = require('../controllers/administradorController');

    const router = express.Router();

    // Rutas para administradores
    router.get('/', administradorController.getAllAdministradores);
    router.get('/:id', administradorController.getAdministradorById);
    router.post('/register', administradorController.createAdministrador);
    router.put('/:id', administradorController.updateAdministrador);
    router.delete('/:id', administradorController.deleteAdministradorById);
    router.post('/login', administradorController.loginAdministrador);

    module.exports = router;
