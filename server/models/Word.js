import mongoose from "mongoose"

const wordSchema = new mongoose.Schema({
  word : String
})

const Word = mongoose.model("words", wordSchema)

export default Word