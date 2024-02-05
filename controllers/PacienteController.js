const express = require('express');
const { Paciente } = require('../db/db.js');

const router = express.Router();

// Listar todos los pacientes
router.get('/all', async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    console.error('Error al obtener pacientes:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Leer un paciente por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
    res.json(paciente);
  } catch (error) {
    console.error('Error al obtener paciente:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Crear un nuevo paciente
router.post('/', async (req, res) => {
  const { nombre, apellido, cedula, correo, telefono, fecha_nacimiento, genero, direccion } = req.body;
  try {
    const newPaciente = await Paciente.create({
      nombre,
      apellido,
      cedula,
      correo,
      telefono,
      fecha_nacimiento,
      genero,
      direccion
    });
    res.status(201).json(newPaciente);
  } catch (error) {
    console.error('Error al crear paciente:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Actualizar un paciente por su ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
    await paciente.update(req.body);
    res.json({ message: 'Paciente actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar paciente:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Eliminar un paciente por su ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
    await paciente.destroy();
    res.json({ message: 'Paciente eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar paciente:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;
