import React from 'react';

const ScoreCard = (props) => {
  return (
    <div className="score-card">
      Score: {props.score}
    </div>
  );
}

export default ScoreCard;
