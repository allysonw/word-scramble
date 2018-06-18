import React from 'react';

const ScoreCard = (props) => {
  return (
    // Check props for what CSS to use
    <div className="score-card">
      SCORE: {props.score}
    </div>
  );
}

export default ScoreCard;
