// Node Modules
const asyncHandler = require('express-async-handler');
const CustomError = require('../helpers/error/CustomError');

module.exports = asyncHandler(async (req, res, next) => {
    if(req.user.role === "user"){
        throw new CustomError("Acces denied: unauthorized access request!", 403);
    };
    next();
});