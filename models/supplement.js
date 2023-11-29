const {mongoose, Schema} = require('mongoose');

// Create Schema
const supplementSchema = new Schema({
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
const Supplement = mongoose.model('Supplement', supplementSchema);

module.exports = Supplement;