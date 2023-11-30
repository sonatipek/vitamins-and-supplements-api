// Node Modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();


// App settings and middlewares
app.use(express.json()) //Read json objects
app.use(cors({
    origin: "*",
    methods: ["GET"]
}));
// Controllers

// Routes
app.use('/', (req, res) => {
    res.json("Hello world!");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_CONNECTION)
    .then(_ => console.log("MongoDB connection is succeeded."))
    .catch((err) => console.log(err));
    
// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\nhttp://127.0.0.1:${PORT}`);
})

