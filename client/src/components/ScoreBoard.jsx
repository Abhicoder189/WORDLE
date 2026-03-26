import React from 'react';

const ScoreBoard = ({ scores }) => {
  return (
    <div className="scoreboard">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Guesses</th>
            <th>Result</th>
            <th>Date</th>
          </tr>
        </thead>
       <tbody>
        {scores && scores.map((s, index) => (
    <tr key={index}>
      <td>{s.playerName}</td>
      <td>{s.guessCount}</td>
      <td>{s.isWon ? "Won" : "Lost"}</td>
      <td>{new Date(s.playedAt).toLocaleDateString()}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default ScoreBoard;