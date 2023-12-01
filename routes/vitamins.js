// Node Modules
const express = require('express');
const router = express.Router();

// Required Controller
const vitaminController = require('../controllers/vitaminController');


router.get('/getVitamins/:tag', vitaminController.fetchVitaminsByTag);

router.get("/getVitamins", vitaminController.fetchVitaminsAll);

router.get('/getVitamin', vitaminController.fetchVitaminByName);

router.post('/createVitamin', vitaminController.createVitamin);

router.put('/updateVitamin', vitaminController.updateVitamin);

router.delete('/deleteVitamin', vitaminController.deleteVitamin);


module.exports = router;