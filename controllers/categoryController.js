// Node Modules
const asyncHandler = require('express-async-handler');

// Required Model Modules
const Vitamin = require('../models/vitamin');
const Supplement = require('../models/supplement');

// Custom Error Module
const CustomError = require('../helpers/error/CustomError');


exports.fetchAllCategories = asyncHandler(async (req, res, next) => {
    const allCategories = new Set();
    
    const supplementCategories = await Supplement.find()
        .select({tags:1, _id: 0});

        
    const vitaminCategories = await Vitamin.find()
        .select({tags:1, _id: 0});


    if (!vitaminCategories.length || !supplementCategories.length) {
        throw new CustomError("Category not found", 404);
    }

    vitaminCategories.forEach(category => {
        allCategories.add(...category.tags)
    });
    
    supplementCategories.forEach(category => {
        allCategories.add(...category.tags)
    });

    return res.status(200).json([...allCategories]);
});


exports.fetchSupplementCategories = asyncHandler(async (req, res, next) => {
    const supplementCategories = new Set();
    
    const categories = await Supplement.find()
    .select({tags:1, _id: 0});
    
    
    if (!categories.length) {
        throw new CustomError("Category not found", 404);
    }
    
    categories.forEach(category => {
        supplementCategories.add(...category.tags)
    });

    return res.status(200).json([...supplementCategories]);
});

exports.fetchVitaminCategories = asyncHandler(async (req, res, next) => {
    const vitaminCategories = new Set();
        
    const categories = await Vitamin.find()
        .select({tags:1, _id: 0});


    if (!categories.length) {
        throw new CustomError("Category not found", 404);
    }

    categories.forEach(category => {
        vitaminCategories.add(...category.tags)
    });
    
    return res.status(200).json([...vitaminCategories]);
});
