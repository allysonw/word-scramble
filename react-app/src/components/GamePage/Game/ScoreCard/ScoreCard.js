import React from 'react';
import './ScoreCard.css';

const ScoreCard = (props) => {
  return (
    <div className="score-card">
      You Won!<br />
      Score: {props.score}
    </div>
  );
}

export default ScoreCard;
