// routes/personal.routes.js
// routes/PersonalRoutes.js
const express = require('express');
const personalController = require('../controllers/personal.controller');

const router = express.Router();

// Rutas para personales
router.get('/', personalController.getAllPersonales);
router.get('/:id', personalController.getPersonalById);
router.post('/', personalController.createPersonal);
router.put('/:id', personalController.updatePersonal);
router.delete('/:id', personalController.deletePersonalById);

module.exports = router;
