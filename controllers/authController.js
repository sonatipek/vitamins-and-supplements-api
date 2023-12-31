// Node Modules
const asyncHandler = require('express-async-handler');
// Required Model Modules
const User = require('../models/user');
// Custom Error Module
const CustomError = require('../helpers/error/CustomError');

exports.createUser = asyncHandler(async (req, res, next) => {
    const {username, email, password, role} = req.body;

    const newUser = await User.create({
        username: username,
        email: email,
        password: password,
        role: role,
    });
 
    let apiKey = await newUser.generateApiKey();
    newUser.api_token= apiKey;
    newUser.save();
    
    return res.status(201).json({
        success: true,
        data: newUser
    });

});