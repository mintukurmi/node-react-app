const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const PORT = 5000 || process.env.PORT;

// Allows cross-origin requests
app.use(cors());
// logging
app.use(morgan("dev"));

const doctors = require("../db/doctors.json");
const cities = require("../db/cities.json");

app.get("/doctors", (req, res) => {
    res.send(doctors);
});

app.get("/cities", (req, res) => {
    res.send(cities);
});

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
