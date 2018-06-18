import React from 'react';

const Score = (props) => {
  return (
    <tr className="Score" >
      <td>{props.score.player}</td>
      <td>{props.score.value}</td>
      <td>{props.score.date}</td>
    </tr>
  );
}

export default Score;
