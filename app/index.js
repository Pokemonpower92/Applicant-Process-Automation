const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db/connect');

const app = express();
const apiPort = process.env.PORT || 3001;

const applicationRouter = require('./routes/applicationRouter');

app.use(express.urlencoded( {extended: true }));
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("home");
})

app.use("/applications", applicationRouter);

app.listen(apiPort, () => {
    console.log("Serving on port 3001");
})