// Node Modules
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
// Custom Error Module
const CustomError = require('../helpers/error/CustomError');

module.exports = asyncHandler(async (req, res, next) => {
        const authToken = req.header("X-Auth-Token");

        // If token informations is not sent
        if (!authToken) {
            throw new CustomError("Authantication failed. Authantication token required", 401)
        };

        jwt.verify(authToken, process.env.JWT_SECRET_KEY);

        next();
});