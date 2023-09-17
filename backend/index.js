const express = require('express');
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const connectToDatabase = require("./config/db.js");

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

connectToDatabase();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.use("/api", require("./routes/api"));

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});