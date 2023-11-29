const {mongoose, Schema} = require('mongoose');

// Create Schema
const vitaminSchema = new Schema({
    name: String,
    rating: Number,
    recommendation: String,
    tags: [String],
    benefits: [String],
    whoShouldUse: [String],
    dose: String,
    timing: String,
    suggestions: [String]
});

// Create Model
const Vitamin = mongoose.model('Vitamin', vitaminSchema);

module.exports = Vitamin;