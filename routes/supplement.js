const express = require('express');

const router = express.Router();

router.get("/getSupplements", async (req, res) => {
    res.json({
        supplement: "getSupplements"
    });
});

router.get('/getSupplementsByName', async (req, res) => {
    res.json({
        supplement: "getSupplementsByName"
    });
});

router.get('/getSupplementsByRate', async (req, res) => {
    res.json({
        supplement: "getSupplementsByRate"
    });
});

router.get('/getSupplementsByTag', async (req, res) => {
    res.json({
        supplement: "getSupplementsByTag"
    });
});

router.post('/createSupplement', async (req, res) => {
    res.json({
        supplement: "addSupplement"
    });
});

router.put('/updateSupplement', async (req, res) => {
    res.json({
        supplement: "updateSupplement"
    });
});

router.delete('/deleteSupplement', async (req, res) => {
    res.json({
        supplement: "deleteSupplement"
    });
});

module.exports = router;