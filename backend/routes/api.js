const express = require("express");
const path = require("path");
const router = express.Router();
const ClinicalTrial = require("../models/ClinicalTrial");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: path.join(__dirname, "/../../.env")});

router.use(express.json());

const secretKey = process.env.JWT_SECRET_KEY;

function calculateCompatibility(user, clinicalTrials) {
  const age = user.age;
  const sex = user.sex;
  const race = user.race;
  const medicalHistory = user.medicalHistory;
  const incomeIndex = user.incomeIndex;

  const trialScores = [];

  for (const trial of clinicalTrials) {
    let score = 0;

    if (age >= trial.ageRange.min && age <= trial.ageRange.max) {
      score += trial.ageRange.significance;
    }

    if (trial.patientSex.sex === sex) {
      score += trial.patientSex.significance;
    } 

    const commonRace = trial.studyRace.races.some(tRace => race.includes(tRace));
    if (commonRace) {
      score += trial.studyRace.significance;
    }

    for (const condition of trial.patientMedicalHistory) {
      if (medicalHistory.includes(condition.condition)) {
        score += condition.significance;
      }
    }

    if (incomeIndex >= trial.patientIncome.incomeIndex && incomeIndex <= trial.patientIncome.incomeIndex) {
      score += trial.patientIncome.significance;
    }

    trialScores.push({ trialName: trial.name, score, details: trial });
  }
  
  trialScores.sort((a, b) => b.score - a.score);
  
  return trialScores;
}

router.get("/data", async (req, res) => {
  try {
    const currentUser = JSON.parse(req.query.user);
    let clinicalTrials = await ClinicalTrial.find({});
    
    if (currentUser) {
      clinicalTrials = calculateCompatibility(currentUser, clinicalTrials);
    }
    
    res.status(200).json(clinicalTrials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/data", async (req, res) => {
  try {
    const clinicalTrialsArray = req.body;
    for (trial of clinicalTrialsArray) {
      const clinicalTrial = new ClinicalTrial({
        ...trial
      });
      await clinicalTrial.save();
    }

    res.json({ message: "Clinical Trials saved successfully" });
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