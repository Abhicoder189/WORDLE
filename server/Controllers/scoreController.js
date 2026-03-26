import Score from "../models/Score.js";
export const getScores= async(req,res)=>{
    const score =await Score.find()
    res.json(score)

}

export const saveScore= async(req,res)=>{
    const scoredata = req.body
    const newScore = new Score(scoredata)
await newScore.save()
res.json(newScore)


}
