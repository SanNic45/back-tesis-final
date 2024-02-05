const { Sequelize } = require('sequelize');

const PacienteModel = (sequelize) => {
  const Paciente = sequelize.define('Paciente', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cedula: {
      type: Sequelize.STRING,
      allowNull: false
    },
    correo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telefono: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fecha_nacimiento: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    genero: {
      type: Sequelize.STRING,
      allowNull: false
    },
    direccion: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Paciente;
};

module.exports = PacienteModel;
