const mongoose = require("mongoose");
require("dotenv").config();
const dbURL = process.env.DB_URL;

const dbConnect = async () => {
  const db = await mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    if (db) {
      console.log("connected to the database");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
