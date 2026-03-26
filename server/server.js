import express  from "express";
import dotenv from "dotenv";
import cors from 'cors';
import gameRoutes from "./routes/gameRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";

import mongoose from "mongoose";
dotenv.config()
const app = express()
app.use(cors({
  origin: "https://wordle-guess-game.vercel.app", // Use your EXACT Vercel URL here
  methods: ["GET", "POST"],
  credentials: true
}));
app.use((req, res, next) => {
  // Replace the '*' with your actual Vercel URL later for better security
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  
  // 2. IMPORTANT: Handle the 'OPTIONS' preflight check
  if (req.method === "OPTIONS") {
    return res.sendStatus(204); 
  }
  next();
});

app.use(express.json());

app.use(express.json())

const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI);
app.use("/api/game", gameRoutes);
app.use("/api/scores", scoreRoutes);
const PORT = process.env.PORT || 8000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});