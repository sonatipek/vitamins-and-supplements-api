
// Node Modules
const express = require('express');
const router = express.Router();
// Custom Modules
const authantication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

// Required Controller
const supplementController = require('../controllers/supplementController');


router.get('/getSupplements/:tag', authantication, supplementController.fetchSupplementsByTag);

router.get("/getSupplements", authantication, supplementController.fetchSupplementsAll);

router.get('/getSupplement', authantication, supplementController.fetchSupplementByName);

router.post('/createSupplement', authantication, authorization, supplementController.createSupplement);

router.put('/updateSupplement', authantication, authorization, supplementController.updateSupplement);

router.delete('/deleteSupplement', authantication, authorization, supplementController.deleteSupplement);


module.exports = router;