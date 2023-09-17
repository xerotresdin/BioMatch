const express = require("express");
const path = require("path");
const router = express.Router();
const ClinicalTrial = require("../models/ClinicalTrial");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: path.join(__dirname, "/../../.env")});

const secretKey = process.env.JWT_SECRET_KEY;

function calculateCompatibility(user, clinicalTrials) {
  const age = user.age;
  const sex = user.sex;
  const race = user.sex;
  const medicalHistory = user.medicalHistory;
  const incomeIndex = user.incomeIndex;

  const trialScores = [];

  for (const trial of clinicalTrials) {
    let score = 0;

    if (age >= trial.ageRange[0] && age <= trial.ageRange[1]) {
      score += trial.ageRange[2];
    }

    if (trial.patientSex[0] === "M" && sex === 1) {
      score += trial.patientSex[1];
    } else if (trial.patientSex[0] === "F" && sex === 2) {
      score += trial.patientSex[1];
    }

    if (trial.studyRace.includes(race[0])) {
      score += trial.studyRace[1];
    }

    for (const condition of trial.patientMedicalHistory) {
      if (medicalHistory.includes(condition.condition)) {
        score += condition.significance;
      }
    }

    if (incomeIndex >= trial.patientIncome[0] && incomeIndex <= trial.patientIncome[1]) {
      score += trial.patientIncome[2];
    }

    trialScores.push({ trialName: trial.name, score, details: trial });
  }

  trialScores.sort((a, b) => b.score - a.score);
  
  return trialScores;
}

router.get("/data", async (req, res) => {
  try {
    const currentUser = req.body.user;
    console.log(currentUser);
    let clinicalTrials = await ClinicalTrial.find({});
    console.log(clinicalTrials);

    clinicalTrials = calculateCompatibility(currentUser, clinicalTrials);
    console.log(clinicalTrials);
    res.status(200).json(clinicalTrials);
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

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const foundUser = await User.findOne({ username });

    if (!foundUser) {
      res.status(400).json({ message: "No such username exists." });
      return;
    }

    const validPassword = bcrypt.compare(password, foundUser.password);

    if (validPassword) {
      const token = jwt.sign({ username: foundUser.username }, secretKey, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: "Invalid password. "});
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;