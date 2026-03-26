import Word from "../models/Word.js"
export const getWord = async (req, res) => {
 const count  = await Word.countDocuments();
 
    const randomNum = Math.random()
    const randomNumber =Math.floor(randomNum * count)
    const randomword = await Word.findOne().skip(randomNumber)
    res.json(randomword.word)

}
export const checkGuess = (req,res)=>{
    let { word, guess } = req.body

    if (!word || !guess) {
        return res.status(400).json({ message: "word and guess are required" })
    }

    word = String(word).toUpperCase()
    guess = String(guess).toUpperCase()

    const colorResults = ["grey", "grey", "grey", "grey", "grey"]
    for (let i = 0; i < colorResults.length; i++) {
        if (word[i] === guess[i]) {
            colorResults[i] = "green"
        }
    }
    for (let i = 0; i < colorResults.length; i++) {
        if (word.includes(guess[i]) && colorResults[i] !== "green") {
            colorResults[i] = "yellow"
        }
    }

    const isWon = colorResults.every((c) => c === "green")

    res.json({ isWon, colorResults })
}