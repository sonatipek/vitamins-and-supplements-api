// Node Modules
const express = require('express');
const router = express.Router();
// Custom Modules
const authantication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
// Required Controller
const vitaminController = require('../controllers/vitaminController');

router.get('/test', () => {
    const {JWT_SECRET_KEY, JWT_EXPIRE} = process.env;
    
    console.log(JWT_SECRET_KEY);
});

router.get('/getVitamins/:tag', authantication, vitaminController.fetchVitaminsByTag);

router.get("/getVitamins", authantication, vitaminController.fetchVitaminsAll);

router.get('/getVitamin', authantication, vitaminController.fetchVitaminByName);

router.post('/createVitamin', authantication, authorization, vitaminController.createVitamin);

router.put('/updateVitamin', authantication, authorization, vitaminController.updateVitamin);

router.delete('/deleteVitamin', authantication, authorization, vitaminController.deleteVitamin);


module.exports = router;