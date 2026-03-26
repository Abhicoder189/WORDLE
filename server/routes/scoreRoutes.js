import {getScores, saveScore} from "../Controllers/scoreController.js"
import express from "express"
const router = express.Router()
router.get("/", getScores)
router.post("/", saveScore)




export default router