// Node Modules
const express = require('express');
const cors = require('cors');


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

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\nhttp://127.0.0.1:${PORT}`);
})

