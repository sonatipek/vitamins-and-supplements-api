
// Node Modules
const express = require('express');
const router = express.Router();

// Required Controller
const supplementController = require('../controllers/supplementController');


router.get("/getSupplements", supplementController.fetchSupplementsAll);

router.get('/getSupplementsByName', supplementController.fetchSupplementsByName);

router.get('/getSupplementsByRate', supplementController.fetchSupplementsByRate);

router.get('/getSupplementsByTag', supplementController.fetchSupplementsByTag);

router.post('/createSupplement', supplementController.creatSupplement);

router.put('/updateSupplement', supplementController.updatSupplement);

router.delete('/deleteSupplement', supplementController.deletSupplement);


module.exports = router;