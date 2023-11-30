const express = require('express');

const router = express.Router();

router.get("/getVitamins", async (req, res) => {
    res.json({
        vitamins: "getVitamins"
    })
});

router.get('/getVitaminsByName', async (req, res ) => {
    res.json({
        vitamins: "getVitaminsByName"
    });
});

router.get('/getVitaminsByRate', async (req, res ) => {
    res.json({
        vitamins: "getVitaminsByRate"
    });
});

router.get('/getVitaminsByTag', async (req, res ) => {
    res.json({
        vitamins: "getVitaminsByTag"
    });
});

router.post('/addVitamin', (req, res) => {
    res.json({
        vitamin: "addVitamin"
    });
});

router.put('/updateVitamin', (req, res) => {
    res.json({
        vitamin: "updateVitamin"
    });
});

router.delete('/deleteVitamin', (req, res) => {
    res.json({
        vitamin: "deleteVitamin"
    });
});

module.exports = router;