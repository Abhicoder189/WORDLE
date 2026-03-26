import React from "react"
import "./Grid.css"

const Grid = ({ guessList, colorResults }) => {
  const rows = [...guessList, ...Array(6 - guessList.length).fill("")]

  return (
    <div className="grid">
      {rows.map((guess, rowIndex) => (
        <div className="row" key={rowIndex}>
          {(rows.length > 0 ? guess.split("") : ["","","","",""]).map((letter, colIndex) => (
            <div
              key={colIndex}
              className={`tile ${colorResults[rowIndex] ? colorResults[rowIndex][colIndex] : "grey"}` }
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default Grid