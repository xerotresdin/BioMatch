const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: String, // This field is optional and not required
  verified: Boolean,
  sex: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  race: {
    type: [String],
    required: true
  },
  medicalHistory: [String], // This field is optional and not required
  incomeIndex: Number // This field is optional and not required
}); 

const User = mongoose.model("User", userSchema);

module.exports = User;
