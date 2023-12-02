// Node Modules
const express = require('express');
const router = express.Router();

// Required Controller
const authController = require('../controllers/authController');


router.post('/register', authController.createUser);


module.exports = router;