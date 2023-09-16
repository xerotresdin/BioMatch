const express = require('express');
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/dist")));

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@main.ruuxroy.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.get("/api/data", (req, res) => {
  const testData = [
    {
      "id": 1,
      "name": "Phase 1 Clinical Trial",
      "Description": "Testing drug X in the Hispanic population",
      "incomePref": 40000,
      "sexPref": "M",
      "racePref": "Hispanic",
      "medicalHistoryPref": null,
      "timeCommitmentWeeks": 3

    },
    {
      "id": 2,
      "name": "Phase 2 Clinical Trial",
      "Description": "Looking for female patients who have undergone chemotherapy for Breast Cancer",
      "incomePref": 10000,
      "sexPref": "F",
      "racePref": null,
      "medicalHistoryPref": "Breast Cancer",
      "timeCommitmentWeeks": 8
    },
    {
      "id": 3,
      "name": "Phase 3 Clinical Trial",
      "Description": "Testing new antidepressant.",
      "incomePref": 40000,
      "sexPref": "M",
      "racePref": null,
      "medicalHistoryPref": "Clinical Depression",
      "timeCommitmentWeeks": 12
    }
  ];
  

  res.json(testData);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});