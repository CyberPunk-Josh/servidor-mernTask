// Rutas para crear los usuarios
const express = require('express');
// importar el router de express:
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// iniciar sesion
// api/auth
router.post('/',

    authController.autenticarUsuario
);

// obtiene el usuario autenticado:
router.get('/',
    auth,
    authController.usuarioAutenticado
)

module.exports = router;