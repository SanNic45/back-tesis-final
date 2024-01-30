const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../db/db.js');

const router = express.Router();

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email, rol: user.rol }, 'your_secret_key', { expiresIn: '1h' });
}

router.post('/login', async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    
    if (!user || user.pass !== pass) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = generateToken(user);

    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;
