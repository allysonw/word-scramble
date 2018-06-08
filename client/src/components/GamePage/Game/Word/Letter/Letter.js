import React from 'react';
import './Letter.css';

const Letter = (props) => {
  return (
    <div className={props.solved ? "Letter-solved" : "Letter-unsolved"} >
      {props.letter.toUpperCase()}
    </div>
  );
}

export default Letter;
