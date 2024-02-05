// Node Modules
const asyncHandler = require('express-async-handler');
// Required Model Modules
const User = require('../models/user');

exports.createUser = asyncHandler(async (req, res, next) => {
    const {username, email, password} = req.body;

    const newUser = await User.create({
        username: username,
        email: email,
        password: password,
        role: "user",
    });
 
    let apiKey = await newUser.generateApiKey();
    newUser.api_token= apiKey;
    newUser.save();
    
    return res.status(201).json({
        success: true,
        data: newUser
    });

});