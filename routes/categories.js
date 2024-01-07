// Node Modules
const express = require('express');
const router = express.Router();

// Custom Modules
const authantication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

// Required Controller
const categoryController = require('../controllers/categoryController');


router.get('/', authantication, categoryController.fetchAllCategories);
router.get('/vitamins', authantication, categoryController.fetchVitaminCategories);
router.get('/supplements', authantication, categoryController.fetchSupplementCategories);


module.exports = router;