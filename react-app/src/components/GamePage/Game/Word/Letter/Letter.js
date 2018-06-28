import React from 'react';
import './Letter.css';

const Letter = (props) => {
  return (
    // Check props for what CSS to use
    <div className={props.solved ? "letter letter-solved" : "letter letter-unsolved"} >
      {props.letter.toUpperCase()}
    </div>
  );
}

export default Letter;
