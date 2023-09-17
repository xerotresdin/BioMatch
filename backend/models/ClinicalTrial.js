const mongoose = require("mongoose");

const clinicalTrialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  compensation: {
    type: Number,
    required: true
  },
  ageRange: {
    type: {
      min: Number,
      max: Number,
      significance: Number,
      isRequired: Boolean
    },
    required: true
  },
  patientSex: {
    type: {
      sex: Number,
      significance: Number,
      isRequired: Boolean
    },
    required: true
  },
  studyRace: {
    type: {
      races: [String],
      significance: Number,
      isRequired: Boolean
    },
    required: true
  },
  patientMedicalHistory: {
    type: [{
      condition: String,
      significance: Number,
      isRequired: Boolean
    }],
    required: true
  },
  patientIncome: {
    type: {
      incomeIndex: Number,
      significance: Number,
      isRequired: Boolean
    },
    required: true
  }
});

const ClinicalTrial = mongoose.model("ClinicalTrial", clinicalTrialSchema);

module.exports = ClinicalTrial;
