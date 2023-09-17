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
    type: [Number, Number, Number, Boolean],
    required: true
  },
  patientSex: {
    type: [String, Number, Boolean],
    required: true
  },
  studyRace: {
    type: [String, Number, Boolean],
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
    type: [Number, Number, Boolean],
    required: true
  }
});

const ClinicalTrial = mongoose.model("ClinicalTrial", clinicalTrialSchema);

module.exports = ClinicalTrial;
