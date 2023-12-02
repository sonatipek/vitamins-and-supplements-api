
// Node Modules
const express = require('express');
const router = express.Router();
// Custom Modules
const authantication = require('../middlewares/authentication');

// Required Controller
const supplementController = require('../controllers/supplementController');


router.get('/getSupplements/:tag', authantication, supplementController.fetchSupplementsByTag);

router.get("/getSupplements", authantication, supplementController.fetchSupplementsAll);

router.get('/getSupplement', authantication, supplementController.fetchSupplementByName);

router.post('/createSupplement', authantication, supplementController.createSupplement);

router.put('/updateSupplement', authantication, supplementController.updateSupplement);

router.delete('/deleteSupplement', authantication, supplementController.deleteSupplement);


module.exports = router;