import React from 'react';
import "./Keyboard.css";

const Keyboard = ({ currentGuess, onKeyPress }) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"]
  ];

  return (
    <div className="keyboard-container">
      {/* Display the current guess above the keys */}
      <div className="current-guess-display">
        {currentGuess}
      </div>

      <div className="keyboard-grid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => (
              <button
                key={key}
                className={`key-btn ${key.length > 1 ? 'wide-key' : ''}`}
                onClick={() => onKeyPress(key)}
              >
                {key === "Backspace" ? "⌫" : key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;