import {getWord, checkGuess} from "../Controllers/gameController.js"
import express from "express"
const router = express.Router()
router.get("/", getWord)
router.post("/", checkGuess)




export default router