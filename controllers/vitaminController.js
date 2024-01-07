// Node Modules
const asyncHandler = require('express-async-handler');
// Required Model Modules
const Vitamin = require('../models/vitamin');
// Custom Error Module
const CustomError = require('../helpers/error/CustomError');


exports.fetchVitaminsByTag = asyncHandler(async (req, res, next) => {
    const tagName = req.params.tag;

    const vitaminsByTag = await Vitamin.find({tags: tagName})
        .select({__v: 0, _id: 0});

    if (!vitaminsByTag.length) {
        return next(new CustomError("Vitamin not found", 404));
    }

    res.status(200).json(vitaminsByTag);
});

exports.fetchVitaminsAll = asyncHandler(async (req, res, next) => {
    const rate = req.query.rate;

    if (rate) {
        const vitamins = await Vitamin.find({rating: rate})
            .select({__v: 0, _id: 0});
            
        return res.status(200).json(vitamins);
    };
        
    const vitamins = await Vitamin.find()
        .select({__v: 0, _id: 0});

    return res.status(200).json(vitamins);      
});

exports.createVitamin = asyncHandler(async (req, res, next) => {
    const newVitamin = new Vitamin({
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

    const vitaminUrl = await newVitamin.createSlugField();
    newVitamin.url = vitaminUrl;

    await newVitamin.save();
    return res.status(201).json(newVitamin);
});

exports.updateVitamin = asyncHandler(async (req, res, next) => {
    const vitaminName = req.query.name;
    
    if (!vitaminName) {
        throw new CustomError("Query parameter 'name' is required", 400);
    }

    const vitamin = await Vitamin.findOneAndUpdate({name: vitaminName}, {
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

    if (!vitamin) {
        throw new CustomError("Vitamin not found", 404);
    }

    res.status(200).json(vitamin);
});

exports.deleteVitamin = asyncHandler(async (req, res, next) => {
    const vitaminName = req.query.name;
    
    if (!vitaminName) {
        throw new CustomError("Query parameter 'name' is required", 400);
    }

    const vitamin = await Vitamin.findOneAndDelete({name:vitaminName})

    if (!vitamin) {
        throw new CustomError("Vitamin not found",404);
    }

    res.status(200).json(vitamin);
});