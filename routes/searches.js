// Node Modules
const express = require('express');
const router = express.Router();

// Custom Modules
const authantication = require('../middlewares/authentication');

// Required Controller
const searchController = require('../controllers/searchController');


router.get('/vitamin', authantication, searchController.fetchVitaminByName);

router.get('/supplement', authantication, searchController.fetchSupplementByName);


module.exports = router;