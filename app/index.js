const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const apiPort = process.env.PORT || 3001;

app.use(express.urlencoded( {extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("home");
})

app.listen(apiPort, () => {
    console.log("Serving on port 3001");
})