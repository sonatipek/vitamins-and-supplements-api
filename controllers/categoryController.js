// Node Modules
const asyncHandler = require('express-async-handler');

// Required Model Modules
const Vitamin = require('../models/vitamin');
const Supplement = require('../models/supplement');

// Custom Error Module
const CustomError = require('../helpers/error/CustomError');


exports.fetchAllCategories = asyncHandler(async (req, res, next) => {
    const allCategories = new Set();
    
    let supplementCategories = await Supplement.find()
        .select({tags:1, _id: 0});

    let vitaminCategories = await Vitamin.find()
        .select({tags:1, _id: 0});

    // Tüm tag'leri tek bir dizi içine yerleştir
    supplementCategories = supplementCategories.reduce(function(acc, val) {
        return acc.concat(val.tags);
    }, []);

    vitaminCategories = vitaminCategories.reduce(function(acc, val) {
        return acc.concat(val.tags);
    }, []);    


    if (!vitaminCategories.length || !supplementCategories.length) {
        throw new CustomError("Category not found", 404);
    }

    vitaminCategories.forEach(category => {
        allCategories.add(category)
    });
    
    supplementCategories.forEach(category => {
        allCategories.add(category)
    });

    return res.status(200).json([...allCategories]);
});


exports.fetchSupplementCategories = asyncHandler(async (req, res, next) => {
    const supplementCategories = new Set();
    
    let categories = await Supplement.find()
    .select({tags:1, _id: 0});

    // Tüm tag'leri tek bir dizi içine yerleştir
    categories = categories.reduce(function(acc, val) {
        return acc.concat(val.tags);
    }, []);
    
    
    if (!categories.length) {
        throw new CustomError("Category not found", 404);
    }
    
    categories.forEach(category => {
        supplementCategories.add(category)
    });

    return res.status(200).json([...supplementCategories]);
});

exports.fetchVitaminCategories = asyncHandler(async (req, res, next) => {
    const vitaminCategories = new Set();
        
    let categories = await Vitamin.find()
        .select({tags:1, _id: 0});

    // Tüm tag'leri tek bir dizi içine yerleştir
    categories = categories.reduce(function(acc, val) {
        return acc.concat(val.tags);
    }, []);

    if (!categories.length) {
        throw new CustomError("Category not found", 404);
    }

    categories.forEach(category => {
        vitaminCategories.add(category)
    });
    
    return res.status(200).json([...vitaminCategories]);
});
