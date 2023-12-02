// Required Modules
const CustomError = require('../../helpers/error/CustomError');

const customErrorHandler = (err, req, res, next) => {
    let customError = err;
    switch (err.name) {
        case "SyntaxError":
            customError = new CustomError("Unexpected Syntax", 400);
            break;

        case "ValidationError":
            customError = new CustomError(err.message, 400);
            break;
    }

    res.status(customError.status || 500).json({
        success: false,
        message: customError.message
    });
};


module.exports = customErrorHandler;

