const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes/routes.js");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/login")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
