const { Sequelize } = require('sequelize');
const UserModel = require('../models/userModel'); // Importa el modelo de usuario
const PacienteModel = require('../models/patientModel'); // Importa el modelo de paciente

// Conexión a la base de datos
const sequelize = new Sequelize('bdjwt', 'root', 'admin', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

// Define los modelos
const User = UserModel(sequelize);
const Paciente = PacienteModel(sequelize);

// Sincroniza los modelos con la base de datos (esto creará las tablas si no existen)
sequelize.sync();

module.exports = { sequelize, User, Paciente };
