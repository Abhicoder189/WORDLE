import React, { useState, useEffect } from 'react';
import "./Keyboard.css"
const Keyboard = ({ currentGuess, onKeyPress }) => {

  // useEffect with keydown listener
    useEffect(() => {
        const handleKeyDown = (event) => {
            onKeyPress(event.key);
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onKeyPress]);


  // return display of currentGuess
  return (
    <div className="keyboard">
      <div className="current-guess">{currentGuess}</div>
    </div>
  );
}
export default Keyboard;