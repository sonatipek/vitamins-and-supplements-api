const {mongoose, Schema} = require('mongoose');

// Create Schema
const vitaminSchema = new Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    rating: {
        type: Number, 
        required: true
    },
    recommendation: {
        type: String, 
        required: true
    },
    tags: {
        type: [String], 
        required: true
    },
    benefits: {
        type: [String], 
        required: true
    },
    whoShouldUse: {
        type: [String], 
        required: true
    },
    dose: {
        type: String, 
        required: true
    },
    timing: {
        type: String, 
        required: true
    },
    suggestions: {
        type: [String], 
        required: true
    }
});

// Create Model
const Vitamin = mongoose.model('Vitamin', vitaminSchema);

module.exports = Vitamin;