const {mongoose, Schema} = require('mongoose');

// Create Schema
const supplementSchema = new Schema({
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
    },
    url: {
        type: String,
        required: false,
        unique: true
    }
});

supplementSchema.methods.createSlugField = async function (){
    const url = this.name
         .trim()
        .replaceAll(" ", '-')
        .toLowerCase();


    return url;
};


// Create Model
const Supplement = mongoose.model('Supplement', supplementSchema);

module.exports = Supplement;