import express  from "express";
import dotenv from "dotenv";
import cors from 'cors';
import gameRoutes from "./routes/gameRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";

import mongoose from "mongoose";
dotenv.config()
const app = express()
app.use(cors({
  origin: "https://wordle-theta-sage.vercel.app/" 
}));;
app.use(express.json())

const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI);
app.use("/api/game", gameRoutes);
app.use("/api/scores", scoreRoutes);
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});