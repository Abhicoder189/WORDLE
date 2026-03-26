import axios from "axios"

const fetchWord =async () =>{
    const response = await axios.get("http://localhost:8000/api/game")
    return response.data

}
const submitGuess=async (guess,word)=>{
  const response=  await axios.post("http://localhost:8000/api/game" ,{guess,word})
  return response.data
}
const saveScore=async(score)=>{
   const response=await axios.post("http://localhost:8000/api/scores",score)
   return response.data

}
export {fetchWord,saveScore,submitGuess}