import mongoose from "mongoose";
import dotenv from "dotenv";
import Word from "./models/Word.js"; // Import your model

dotenv.config();

const words = ["CRANE", "APPLE", "STONE", "BRAIN", "LIGHT", "REACT", "NODES"];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  
  // 1. Delete all existing words so we start fresh
  await Word.deleteMany({}); 

  // 2. Insert the array into the collection
  await Word.insertMany(words.map(w => ({ word: w })));

  console.log("Database Seeded! 🌱");
  mongoose.connection.close();
};

seedDB();