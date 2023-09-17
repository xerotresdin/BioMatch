const express = require("express");
const router = express.Router();
const ClinicalTrial = require("../models/ClinicalTrial");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: path.join(__dirname, "../../.env")});

const secretKey = process.env.

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

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const foundUser = await User.findOne({ username });

    if (foundUser) {
      res.status(400).json({ message: "Username already exists." });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      password: hashedPassword,
      ...req.body
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while registering user." });
  }
});

router.post("/signin", (req, res) => {
  const { username, password } = req.body;
  try {
    
  } catch (error) {

  }
});

module.exports = router;