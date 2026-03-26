import mongoose from "mongoose"

const scoreSchema = new mongoose.Schema({
  playerName :String,
guessCount : Number,
isWon :Boolean,
playedAt :Date

})

const Score = mongoose.model("scores", scoreSchema)

export default Score