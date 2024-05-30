const express = require('express');
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

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