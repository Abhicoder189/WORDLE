import express  from "express";
import dotenv from "dotenv";
import cors from 'cors';
import gameRoutes from "./routes/gameRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";

import mongoose from "mongoose";
dotenv.config()
app.use(cors({
  origin: "https://wordle-guess-game.vercel.app", // Use your EXACT Vercel URL here
  methods: ["GET", "POST"],
  credentials: true
}));
const app = express()

app.use(express.json())

const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI);
app.use("/api/game", gameRoutes);
app.use("/api/scores", scoreRoutes);
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});