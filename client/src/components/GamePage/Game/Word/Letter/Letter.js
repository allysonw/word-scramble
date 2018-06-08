import React from 'react';
import './Letter.css';

const Letter = (props) => {
  return (
    <div className="Letter" >
      {props.letter.toUpperCase()}
    </div>
  );
}

export default Letter;
