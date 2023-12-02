// Required Modules
const CustomError = require('../../helpers/error/CustomError');

const customErrorHandler = (err, req, res, next) => {
    let customError = err;
    console.log(err.name);
    switch (err.name) {
        case "SyntaxError":
            customError = new CustomError("Unexpected Syntax", 400);
            break;

        case "ValidationError":
            customError = new CustomError(err.message, 400);
            break;

        case "TokenExpiredError":
            customError = new CustomError("API token expired", 401);
            break;

        case "JsonWebTokenError":
            customError = new CustomError("Invalid api token", 401);
            break;
    }

    res.status(customError.status || 500).json({
        success: false,
        message: customError.message
    });
};


module.exports = customErrorHandler;

