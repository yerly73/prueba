// index.js
const express = require('express');
const cors = require('cors');
const db = require('./src/db/conexion'); // Importa la conexión a la base de datos
const administradorRoutes = require('./src/routes/administradorRoutes');
const personalRoutes = require('./src/routes/personal.routes'); // Importa las rutas de personales

const app = express();

// Middleware para habilitar CORS
app.use(cors());
app.use(express.json());

// Rutas
app.use('/administradores', administradorRoutes);
app.use('/personales', personalRoutes); // Usa las rutas de personales

const PORT = 3010;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
