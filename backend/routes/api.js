const express = require("express");
const router = express.Router();
const ClinicalTrial = require("../models/ClinicalTrial");
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/data", async (req, res) => {
  try {
    const clinicalTrials = await ClinicalTrial.find({});
    console.log(clinicalTrials);
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

router.post("signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while registering user." });
  }
});

module.exports = router;