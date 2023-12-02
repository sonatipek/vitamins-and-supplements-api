const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_CONNECTION)
    .then(_ => console.log("MongoDB connection is succeeded."))
    .catch((err) => console.error(err));
};

module.exports = connectDatabase;