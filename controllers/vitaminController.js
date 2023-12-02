// Required Model Modules
const Vitamin = require('../models/vitamin');


exports.fetchVitaminsByTag = async (req, res) => {
    try {
        const tagName = req.params.tag;

        const vitaminsByTag = await Vitamin.find({tags: tagName})
            .select({__v: 0, _id: 0});

        if (!vitaminsByTag.length) {
            throw new Error("Vitamin not found");
        }
        
        res.status(200).json(vitaminsByTag);
    } catch (error) {
        if (error.message === "Vitamin not found") {
            return res.status(404).json({
                description: error.message,
            });
        }
        
        return res.status(500).json({
            error: error.name,
            description: error.message,
        });
    }
};

exports.fetchVitaminsAll = async (req, res) => {
    try {
        const rate = req.query.rate;

        if (rate) {
            const vitamins = await Vitamin.find({rating: rate})
                .select({__v: 0, _id: 0});
                
            return res.status(200).json(vitamins);
        };
            
        const vitamins = await Vitamin.find()
            .select({__v: 0, _id: 0});

        return res.status(200).json(vitamins);
        
    } catch (error) {
        return res.status(500).json({
            error: error.name,
            description: error.message
        });
    }
};

exports.fetchVitaminByName = async (req, res) => {
    try {
        const vitaminName = req.query.name;

        if (!vitaminName) {
            throw new Error("Query parameter 'name' is required");
        }

        const vitamin = await Vitamin.find({name: vitaminName})
            .select({__v: 0});

        if (!vitamin.length) {
            throw new Error("Vitamin not found");
        }
     
        return res.status(200).json(vitamin);

    } catch (error) {
        if (error.message === "Query parameter 'name' is required") {
            return res.status(400).json({
                description: error.message,
            });
        }

        if (error.message === "Vitamin not found") {
            return res.status(404).json({
                description: error.message,
            });
        }
        
        return res.status(500).json({
            error: error.name,
            description: error.message,
        });
    }
};

exports.createVitamin = async (req, res) => {
    try {
        const newVitamin = new Vitamin({
            name: req.body.name,
            rating: req.body.rating,
            recommendation: req.body.recommendation,
            tags: req.body.tags,
            benefits: req.body.benefits,
            whoShouldUse: req.body.whoShouldUse,
            dose: req.body.dose,
            timing: req.body.timing,
            suggestions: req.body.suggestions
        });
    
        await newVitamin.save();
        return res.status(201).json(newVitamin);

    } catch (error) {
        if (error.name == "MongooseError") {
            return res.status(500).json({
                error: error.name,
                description: error.message
            });
        }

        return res.status(400).json({
            error: error.name,
            description: error.message,
            keyValue: error.keyValue
        });
    }
}

exports.updateVitamin = async (req, res) => {
    try {
        const vitaminName = req.query.name;
        
        if (!vitaminName) {
            throw new Error("Query parameter 'name' is required");
        }

        const vitamin = await Vitamin.findOneAndUpdate({name: vitaminName}, {
            $set: {
                name: req.body.name,
                rating: req.body.rating,
                recommendation: req.body.recommendation,
                tags: req.body.tags,
                benefits: req.body.benefits,
                whoShouldUse: req.body.whoShouldUse,
                dose: req.body.dose,
                timing: req.body.timing,
                suggestions: req.body.suggestions
            }
        }, {new: true})

        if (!vitamin) {
            throw new Error("Vitamin not found");
        }

        res.status(200).json(vitamin);
        
    } catch (error) {
        if (error.message === "Query parameter 'name' is required") {
            return res.status(400).json({
                description: error.message,
            });
        }

        if (error.message === "Vitamin not found") {
            return res.status(404).json({
                description: error.message,
            });
        }
        
        return res.status(500).json({
            error: error.name,
            description: error.message,
        });

        
    }
}

exports.deleteVitamin = async (req, res) => {
    try {
        const vitaminName = req.query.name;
        
        if (!vitaminName) {
            throw new Error("Query parameter 'name' is required");
        }

        const vitamin = await Vitamin.findOneAndDelete({name:vitaminName})

        if (!vitamin) {
            throw new Error("Vitamin not found");
        }

        res.status(200).json(vitamin);
        
    } catch (error) {
        if (error.message === "Query parameter 'name' is required") {
            return res.status(400).json({
                description: error.message,
            });
        }

        if (error.message === "Vitamin not found") {
            return res.status(404).json({
                description: error.message,
            });
        }
        
        return res.status(500).json({
            error: error.name,
            description: error.message,
        });

        
    }
};