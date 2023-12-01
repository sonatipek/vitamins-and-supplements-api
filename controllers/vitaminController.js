// Required Model Modules
const Vitamin = require('../models/vitamin');

exports.fetchVitaminsAll = async (req, res) => {
    res.json({
        status: "200 OK",
        result: "all vitamins"
    });
};

exports.fetchVitaminsByName = async (req, res) => {
    res.json({
        status: "200 OK",
        result: "vitamins by name"
    });
};

exports.fetchVitaminsByRate = async (req, res) => {
    res.json({
        status: "200 OK",
        result: "vitamins by rate"
    });
};

exports.fetchVitaminsByTag = async (req, res) => {
    res.json({
        status: "200 OK",
        result: "vitamins by tag"
    });
};

exports.createVitamin = async(req, res) => {
    res.json({
        status: "200 OK",
        result: "vitamin created"
    });

}


// router.put('/updateVitamin', );

// router.delete('/deleteVitamin