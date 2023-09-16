const express = require('express');
const cors = require("cors");
const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

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
  console.log("sent response!");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});