const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor:
const app = express();

// Conectar a la base de datos:
conectarDB();

// habilitar cors:
app.use(cors());

// Habilitar express.json, se usa para leer datos que el usuario coloque
app.use(express.json({extended: true}));


// creando el puerto:
const PORT = process.env.PORT || 4000;

// importar rutas
// ruta para la creacion de usuarios:
app.use('/api/usuarios', require('./routes/usuarios'));
// autenticacion de usuarios:
app.use('/api/auth', require('./routes/auth'));
// rutas de proyectos:
app.use('/api/proyectos', require('./routes/proyectos'));
// rutas de las tareas
app.use('/api/tareas', require('./routes/tareas'));


// definir la pagina principal:
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

// arrancar la app:
app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});