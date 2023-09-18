const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3500;

// connect to db
const MONGODB_URI = process.env.MONGODB_URI;

// middlewares
app.use("/", (req, res, next) => {
    console.log(`url:method -> ${req.url} ${req.method}`);
    // next should be called to move to the next 
    // otherwise it will be staying here
    next();
})

// endpoints
app.get("/", (req, res) => {
    res.json({
        "message": "Welcome to backend"
    })
})


mongoose.connect(MONGODB_URI)
    .then((_) => {
        app.listen(PORT, () => {
            console.log(`Connected to DB and Server is running at ${PORT}`);
        })
    })
    .catch((err) => {
        console.log("Error: ", err);
    })