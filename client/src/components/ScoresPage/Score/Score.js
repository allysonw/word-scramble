import React from 'react';

const Score = (props) => {
  return (
    <tr className="Score" >
      <td>{props.score.player}</td>
      <td>{props.score.value}</td>
    </tr>
  );
}

export default Score;
