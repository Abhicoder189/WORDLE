import express  from "express";
import dotenv from "dotenv";
import cors from 'cors';
import gameRoutes from "./routes/gameRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";

import mongoose from "mongoose";
dotenv.config()
const app = express()

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://wordle-guess-game.vercel.app",
  "http://localhost:5173"
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    return callback(new Error("Not allowed by CORS"))
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}))

app.use(express.json());

const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI);
app.use("/api/game", gameRoutes);
app.use("/api/scores", scoreRoutes);
const PORT = process.env.PORT || 8000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});