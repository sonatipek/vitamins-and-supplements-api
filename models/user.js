// Node Modules
const {mongoose, Schema} = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

userSchema.methods.generateApiKey = async function (){
    const {JWT_SECRET_KEY, JWT_EXPIRE} = process.env;

    const payload = {
        id: this._id,
        email: this.email,
        role: this.role
    };

    const token = jwt.sign(payload, `${JWT_SECRET_KEY}`, {
        expiresIn: JWT_EXPIRE
    });

    return token;
};

userSchema.pre("save", function(next) {
    // Changed Password
    if(!this.isModified("password")) {
        next();
    }

    bcrypt.genSalt(10, (err, salt) =>{
        if (err) next(err);

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) next(err);

            this.password = hash;
            next();
        })
    });
});

// Create Model
const User = mongoose.model('User', userSchema);

module.exports = User;