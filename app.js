// Node Modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

// *Custom Modules
// Routes Definitions
const vitaminsRoutes = require('./routes/vitamins');
const supplementsRoutes = require('./routes/supplement');


// Instance
const app = express();


// App settings and middlewares
app.use(express.json()) //Read json objects
app.use(cors({
    origin: "*",
    methods: ["GET"]
}));


// Routes
app.use('/api/vitamin', vitaminsRoutes);
app.use('/api/supplement', supplementsRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_CONNECTION)
    .then(_ => console.log("MongoDB connection is succeeded."))
    .catch((err) => console.log(err));

    
// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\nhttp://127.0.0.1:${PORT}`);
})

