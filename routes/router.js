const express = require('express');
const loginController = require('../controllers/LoginController.js');
const userController = require('../controllers/UserController.js');

const router = express.Router();

router.use('/auth', loginController);
router.use('/users', userController);

module.exports = router;
