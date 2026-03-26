import Word from "../models/Word.js"
export const getWord = async (req, res) => {
 const count  = await Word.countDocuments();
 
    const randomNum = Math.random()
    const randomNumber =Math.floor(randomNum * count)
    const randomword = await Word.findOne().skip(randomNumber)
    res.json(randomword.word)

}
export const checkGuess = (req,res)=>{
    const {word, guess} = req.body
    word = word.toUpperCase();
  guess = guess.toUpperCase();
    let color= ["grey","grey","grey","grey","grey"]
    for(let i =0;i<color.length;i++){
        if(word[i] == guess[i]){
            color[i]="green"
        }
    }
    for(let i =0;i<color.length;i++){
        if(word.includes(guess[i]) && color[i]!="green"){
            color[i]="yellow"
        }

    }
    let isWon = true
    for(let i =0;i<color.length;i++){
       if(color[i]== "yellow" || color[i] =="grey"){
        isWon = false
       }

    }
  
    res.json({isWon,color})
}