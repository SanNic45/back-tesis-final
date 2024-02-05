const express = require('express');
const loginController = require('../controllers/LoginController.js');
const userController = require('../controllers/UserController.js');
const pacientController = require('../controllers/PacienteController.js');

const router = express.Router();

router.use('/auth', loginController);
router.use('/users', userController);
router.use('/pacient', pacientController );

module.exports = router;
