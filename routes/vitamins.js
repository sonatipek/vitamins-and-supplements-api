// Node Modules
const express = require('express');
const router = express.Router();
// Custom Modules
const authantication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
// Required Controller
const vitaminController = require('../controllers/vitaminController');


router.post('/create', authantication, authorization, vitaminController.createVitamin);

router.put('/update', authantication, authorization, vitaminController.updateVitamin);

router.delete('/delete', authantication, authorization, vitaminController.deleteVitamin);

router.get('/:tag', authantication, vitaminController.fetchVitaminsByTag);

router.get("/", authantication, vitaminController.fetchVitaminsAll);

module.exports = router;