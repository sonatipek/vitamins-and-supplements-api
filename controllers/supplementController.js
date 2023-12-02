// Node Modules
const asyncHandler = require('express-async-handler');
// Required Model Modules
const Supplement = require('../models/supplement');
// Custom Error Module
const CustomError = require('../helpers/error/CustomError');

exports.fetchSupplementsByTag = asyncHandler(async (req, res, next) => {
    const tagName = req.params.tag;

    const supplementsByTag = await Supplement.find({tags: tagName})
        .select({__v: 0, _id: 0});

    if (!supplementsByTag.length) {
        throw new CustomError("Supplement not found", 404);
    }
    
    res.status(200).json(supplementsByTag);
});

exports.fetchSupplementsAll = asyncHandler(async (req, res, next) => {
    const rate = req.query.rate;

    if (rate) {
        const supplements = await Supplement.find({rating: rate})
            .select({__v: 0, _id: 0});
            
        return res.status(200).json(supplements);
    };
        
    const supplements = await Supplement.find()
        .select({__v: 0, _id: 0});

    return res.status(200).json(supplements);
});

exports.fetchSupplementByName = asyncHandler(async (req, res, next) => {
    const supplementName = req.query.name;

    if (!supplementName) {
        throw new CustomError("Query parameter 'name' is required",400);
    }

    const supplement = await Supplement.find({name: supplementName})
        .select({__v: 0});

    if (!supplement.length) {
        throw new CustomError("Supplement not found",404);
    }
    
    return res.status(200).json(supplement);
});

exports.createSupplement = asyncHandler(async (req, res, next) => {
    const newSupplement = new Supplement({
        name: req.body.name,
        rating: req.body.rating,
        recommendation: req.body.recommendation,
        tags: req.body.tags,
        benefits: req.body.benefits,
        whoShouldUse: req.body.whoShouldUse,
        dose: req.body.dose,
        timing: req.body.timing,
        suggestions: req.body.suggestions
    });

    await newSupplement.save();
    return res.status(201).json(newSupplement);
});

exports.updateSupplement = asyncHandler(async (req, res, next) => {
    const supplementName = req.query.name;
    
    if (!supplementName) {
        throw new CustomError("Query parameter 'name' is required", 400);
    }

    const supplement = await Supplement.findOneAndUpdate({name: supplementName}, {
        $set: {
            name: req.body.name,
            rating: req.body.rating,
            recommendation: req.body.recommendation,
            tags: req.body.tags,
            benefits: req.body.benefits,
            whoShouldUse: req.body.whoShouldUse,
            dose: req.body.dose,
            timing: req.body.timing,
            suggestions: req.body.suggestions
        }
    }, {new: true})

    if (!supplement) {
        throw new Error("Supplement not found",404);
    }

    res.status(200).json(supplement);
});

exports.deleteSupplement = asyncHandler(async (req, res, next) => {
    const supplementName = req.query.name;
    
    if (!supplementName) {
        throw new CustomError("Query parameter 'name' is required",400);
    }

    const supplement = await Supplement.findOneAndDelete({name:supplementName})

    if (!supplement) {
        throw new CustomError("Supplement not found",404);
    }

    res.status(200).json(supplement);
});