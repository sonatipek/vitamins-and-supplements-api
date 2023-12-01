// Node Modules
const express = require('express');
const router = express.Router();

// Required Controller
const vitaminController = require('../controllers/vitaminController');


router.get("/getVitamins", vitaminController.fetchVitaminsAll);

router.get('/getVitaminsByName', );

router.get('/getVitaminsByRate', );

router.get('/getVitaminsByTag', );

router.post('/createVitamin', );

router.put('/updateVitamin', );

router.delete('/deleteVitamin', );

module.exports = router;