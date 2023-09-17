const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  verified: Boolean,
  sex: String,
  age: Number,
  race: [String],
  medicalHistory: [String],
  incomeIndex: Number
}); 

const User = mongoose.model("User", userSchema);

module.exports = User;