// Node Modules
const asyncHandler = require('express-async-handler');

// Required Model Modules
const Vitamin = require('../models/vitamin');
const Supplement = require('../models/supplement');

// Custom Error Module
const CustomError = require('../helpers/error/CustomError');


exports.fetchVitaminByName = asyncHandler(async (req, res, next) => {
    const vitaminName = req.query.name;

    if (!vitaminName) {
        throw new CustomError("Query parameter 'name' is required", 400);
    }

    const vitamin = await Vitamin.find({name: { $regex: vitaminName, $options: 'i' } })
        .select({__v: 0});

    if (!vitamin.length) {
        throw new CustomError("Vitamin not found", 404);
    }
    
    return res.status(200).json(vitamin);
});

exports.fetchSupplementByName = asyncHandler(async (req, res, next) => {
    const supplementName = req.query.name;

    if (!supplementName) {
        throw new CustomError("Query parameter 'name' is required",400);
    }

    const supplement = await Supplement.find({name: { $regex: supplementName, $options: 'i' } })
        .select({__v: 0});

    if (!supplement.length) {
        throw new CustomError("Supplement not found",404);
    }
    
    return res.status(200).json(supplement);
});