const mongoose = require("mongoose");

const clinicalTrialSchema = new mongoose.Schema({
  name: String,
  institution: String,
  compensation: Number,
  ageRange: [Number, Number, Number],
  studyRace: [String, Number],
  patientMedicalHistory: [{
    condition: String,
    significance: Number
  }],
  patientIncome: [Number, Number]
});

const ClinicalTrial = mongoose.model("ClinicalTrial", clinicalTrialSchema);

module.exports = ClinicalTrial;