import React from "react";
import { useEffect, useState } from "react";
import { fetchWord, saveScore, submitGuess } from "../api/api.js";
import Grid from "../components/Grid.jsx"
import Keyboard from "../components/Keyboard.jsx"
import ScoreBoard from "../components/ScoreBoard.jsx"
const Home = () => {
  const [word, setWord] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessList, setGuessList] = useState([]);
  const [colorResults, setColorResults] = useState([]);
  const [isWon, setIsWon] = useState(false);
  const [scores, setScores] = useState([]);
  const [isGameOver, setIsgameOver] = useState(false);
  useEffect(() => {
    const getWord = async () => {
    const data = await fetchWord();
    // Ensure we are saving a STRING, not an object
    const actualWord = typeof data === 'object' ? data.word : data;
    setWord(actualWord);
  };
  getWord();
  }, []);
  const handleKeyPress = (key) => {
  if (key === "Backspace") {
    setCurrentGuess(currentGuess.slice(0, -1));
  } else if (key === "Enter") {
    handleSubmit();
  } else if (key.length === 1 && /[a-zA-Z]/.test(key)) { 
    // Only add if it's a single letter, and make it Uppercase
    if (currentGuess.length < 5) {
      setCurrentGuess((currentGuess + key).toUpperCase());
    }
  }
};
const handleSubmit = async () => {
  // 1. Prevent submitting if game is already over
  if (isGameOver || isWon) return;

  // 2. Prevent submitting short words
  if (currentGuess.length !== 5) return;

  const data = await submitGuess(currentGuess, word);

  // 3. Create the NEW arrays locally
  const nextGuessList = [...guessList, currentGuess];
  const nextColorResults = [...colorResults, data.colorResults];

  // 4. Update states
  setGuessList(nextGuessList);
  setColorResults(nextColorResults);
  setIsWon(data.isWon);
  setCurrentGuess("");

  // 5. Use the LOCAL variable 'nextGuessList' for the check
  // Length 6 means the player just finished their 6th attempt
  if (data.isWon || nextGuessList.length === 6) {
    setIsgameOver(true);
    
   
    
  }
};
  
    return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {/* Check: Are these states actually booleans? */}
    {isWon && <h1 style={{color: 'green'}}>You Won!</h1>}
    {isGameOver && !isWon && <h1 style={{color: 'red'}}>Game Over!</h1>}

    <Grid guessList={guessList} colorResults={colorResults} />
    <Keyboard currentGuess={currentGuess} onKeyPress={handleKeyPress} />
    <ScoreBoard scores={scores} />
  </div>
);
  

};


export default Home;
