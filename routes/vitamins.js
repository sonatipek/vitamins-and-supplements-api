// Node Modules
const express = require('express');
const router = express.Router();
// Custom Modules
const authantication = require('../middlewares/authentication');
// Required Controller
const vitaminController = require('../controllers/vitaminController');


router.get('/getVitamins/:tag', authantication, vitaminController.fetchVitaminsByTag);

router.get("/getVitamins", authantication, vitaminController.fetchVitaminsAll);

router.get('/getVitamin', authantication, vitaminController.fetchVitaminByName);

router.post('/createVitamin', authantication, vitaminController.createVitamin);

router.put('/updateVitamin', authantication, vitaminController.updateVitamin);

router.delete('/deleteVitamin', authantication, vitaminController.deleteVitamin);


module.exports = router;