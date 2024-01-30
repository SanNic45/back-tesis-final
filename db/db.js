const { Sequelize } = require('sequelize');

// Conexión a la base de datos
const sequelize = new Sequelize('bdjwt', 'root', 'admin', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

// Definición del modelo de usuario
const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cedula: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  celular: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pass: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rol: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
sequelize.sync();

module.exports = { sequelize, User };
