const express = require("express");
const router = express.Router();
const ClinicalTrial = require("../models/ClinicalTrial");

router.get("/data", async (req, res) => {
  try {
    const clinicalTrials = await ClinicalTrial.find({});
    res.json(clinicalTrials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/data", async (req, res) => {
  try {
    const { name, institution, description, compensation, ageRange, patientSex, studyRace, patientMedicalHistory, patientIncome } = req.body;
    const clinicalTrial = new ClinicalTrial({
      name,
      institution,
      description,
      compensation,
      ageRange,
      studyRace,
      patientMedicalHistory,
      patientIncome
    });

    await clinicalTrial.save();

    res.json({ message: "Clinical Trial saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;