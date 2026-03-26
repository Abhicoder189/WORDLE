import axios from "axios"
const rawApiUrl = import.meta.env.VITE_API_URL || "https://wordle-api-abhi.onrender.com"
const API_URL = rawApiUrl.replace(/\/+$/, "")
const fetchWord =async () =>{
    const response = await axios.get(`${API_URL}/api/game`)
    return response.data

}
const submitGuess=async (guess,word)=>{
  const response=  await axios.post(`${API_URL}/api/game` ,{guess,word})
  return response.data
}
const saveScore=async(score)=>{
   const response=await axios.post(`${API_URL}/api/scores`,score)
   return response.data

}
export {fetchWord,saveScore,submitGuess}