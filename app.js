const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./db/db.js');
const router = require('./routes/router.js'); // Importa el enrutador principal

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Configuración de CORS
app.use(cors());

// Usar el enrutador principal
app.use('/api', router);

// Ruta de prueba para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('¡El servidor está en funcionamiento!');
});

// Iniciar el servidor después de conectar con la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente con la base de datos');
    app.listen(PORT, () => {
      console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });
