const express = require("express");
const morgan = require("morgan");

const app = express();

// middlewares
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => res.sendFile(__dirname + "/home.html"));

// start server
app.listen(3000, () => console.log("Listening on port 3000..."));