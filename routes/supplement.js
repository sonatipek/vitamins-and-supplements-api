
// Node Modules
const express = require('express');
const router = express.Router();
// Custom Modules
const authantication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

// Required Controller
const supplementController = require('../controllers/supplementController');



router.post('/create', authantication, authorization, supplementController.createSupplement);

router.put('/update', authantication, authorization, supplementController.updateSupplement);

router.delete('/delete', authantication, authorization, supplementController.deleteSupplement);

router.get('/:tag', authantication, supplementController.fetchSupplementsByTag);

router.get("/", authantication, supplementController.fetchSupplementsAll);


module.exports = router;