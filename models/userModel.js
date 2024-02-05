const { Sequelize } = require('sequelize');

const UserModel = (sequelize) => {
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

  return User;
};

module.exports = UserModel;
