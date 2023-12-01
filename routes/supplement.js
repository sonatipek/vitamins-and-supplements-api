
// Node Modules
const express = require('express');
const router = express.Router();

// Required Controller
const supplementController = require('../controllers/supplementController');


router.get('/getSupplements/:tag', supplementController.fetchSupplementsByTag);

router.get("/getSupplements", supplementController.fetchSupplementsAll);

router.get('/getSupplement', supplementController.fetchSupplementByName);

router.post('/createSupplement', supplementController.createSupplement);

router.put('/updateSupplement', supplementController.updateSupplement);

router.delete('/deleteSupplement', supplementController.deleteSupplement);


module.exports = router;