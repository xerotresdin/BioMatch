const mongoose = require("mongoose");

const clinicalTrialSchema = new mongoose.Schema({
  name: String,
  institution: String,
  description: String,
  compensation: Number,
  ageRange: [Number, Number, Number, Boolean],
  patientSex: [String, Number, Boolean],
  studyRace: [String, Number, Boolean],
  patientMedicalHistory: [{
    condition: String,
    significance: Number,
    isRequired: Boolean
  }],
  patientIncome: [Number, Number, Boolean]
});

const ClinicalTrial = mongoose.model("ClinicalTrial", clinicalTrialSchema);

module.exports = ClinicalTrial;