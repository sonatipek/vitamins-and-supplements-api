// Required Model Modules
const Supplement = require('../models/supplement');


exports.fetchSupplementsByTag = async (req, res) => {
    try {
        const tagName = req.params.tag;

        const supplementsByTag = await Supplement.find({tags: tagName})
            .select({__v: 0, _id: 0});

        if (!supplementsByTag.length) {
            throw new Error("Supplement not found");
        }
        
        res.status(200).json(supplementsByTag);
    } catch (error) {
        if (error.message === "Supplement not found") {
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

exports.fetchSupplementsAll = async (req, res) => {
    try {
        const rate = req.query.rate;

        if (rate) {
            const supplements = await Supplement.find({rating: rate})
                .select({__v: 0, _id: 0});
                
            return res.status(200).json(supplements);
        };
            
        const supplements = await Supplement.find()
            .select({__v: 0, _id: 0});

        return res.status(200).json(supplements);
        
    } catch (error) {
        return res.status(500).json({
            error: error.name,
            description: error.message
        });
    }
};

exports.fetchSupplementByName = async (req, res) => {
    try {
        const supplementName = req.query.name;

        if (!supplementName) {
            throw new Error("Query parameter 'name' is required");
        }

        const supplement = await Supplement.find({name: supplementName})
            .select({__v: 0});

        if (!supplement.length) {
            throw new Error("Supplement not found");
        }
     
        return res.status(200).json(supplement);

    } catch (error) {
        if (error.message === "Query parameter 'name' is required") {
            return res.status(400).json({
                description: error.message,
            });
        }

        if (error.message === "Supplement not found") {
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

exports.createSupplement = async (req, res) => {
    try {
        const newSupplement = new Supplement({
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
    
        await newSupplement.save();
        return res.status(201).json(newSupplement);

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

exports.updateSupplement = async (req, res) => {
    try {
        const supplementName = req.query.name;
        
        if (!supplementName) {
            throw new Error("Query parameter 'name' is required");
        }

        const supplement = await Supplement.findOneAndUpdate({name: supplementName}, {
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

        if (!supplement) {
            throw new Error("Supplement not found");
        }

        res.status(200).json(supplement);
        
    } catch (error) {
        if (error.message === "Query parameter 'name' is required") {
            return res.status(400).json({
                description: error.message,
            });
        }

        if (error.message === "Supplement not found") {
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

exports.deleteSupplement = async (req, res) => {
    try {
        const supplementName = req.query.name;
        
        if (!supplementName) {
            throw new Error("Query parameter 'name' is required");
        }

        const supplement = await Supplement.findOneAndDelete({name:supplementName})

        if (!supplement) {
            throw new Error("Supplement not found");
        }

        res.status(200).json(supplement);
        
    } catch (error) {
        if (error.message === "Query parameter 'name' is required") {
            return res.status(400).json({
                description: error.message,
            });
        }

        if (error.message === "Supplement not found") {
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