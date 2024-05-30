const express = require('express');
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

require("dotenv").config();

const app = express();

// middlewares
app.use(express.json());
app.use('/api', userRoutes); // Todas las rutas tendran esto delante


// routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
})

// mongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected BD"))
    .catch((err) => console.error(err));


const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log("SERVER CRUD LISTENING IN PORT", port);
});