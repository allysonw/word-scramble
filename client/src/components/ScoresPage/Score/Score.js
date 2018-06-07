import React from 'react';

const Score = (props) => {
  return (
    <div className="Score" >
      <li>Player: {props.score.player}, Score: {props.score.value}, Date: {props.score.created_at}</li>
    </div>
  );
}

export default Score;
