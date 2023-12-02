const {mongoose, Schema} = require('mongoose');

// Create Schema
const userSchema = new Schema({
    username: {
        type: String, 
        required: [true, "Please provide a name"]
    },
    email: {
        type: String, 
        required: [true, "Please provide a email"],
        unique: [true, "Email must be unique. Please try different email"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email adress"
        ]
    },
    password: {
        type: String, 
        minlength: [6, "Please provide a password with min length 6"],
        required: [true, "Please provide a password"],
        select: false
    },
    role : {
        type: String,
        default: "user",
        enum : ["user", "admin"]
    },
    api_token: {
        type: String,
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
});

// Create Model
const User = mongoose.model('User', userSchema);

module.exports = User;