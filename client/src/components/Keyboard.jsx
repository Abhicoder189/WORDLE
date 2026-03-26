const Keyboard = ({ currentGuess, onKeyPress }) => {
  const keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "Backspace", "Enter"];

  return (
    <div className="keyboard-container">
      <div className="current-guess">{currentGuess}</div>
      <div className="visual-keyboard">
        {keys.map((key) => (
          <button 
            key={key} 
            onClick={() => onKeyPress(key)}
            className="key-button"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};