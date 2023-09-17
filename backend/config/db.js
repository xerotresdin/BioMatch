const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/../../.env" });

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@main.ruuxroy.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Connected to MongoDB at ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectToDatabase;