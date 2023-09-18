const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;

// middlewares
app.use("/", (req,res, next) => {
    console.log(`url:method -> ${req.url} ${req.method}`);
    // next should be called to move to the next 
    // otherwise it will be staying here
    next();
})

// endpoints
app.get("/", (req,res) => {
    res.json({
        "message": "Welcome to backend"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})