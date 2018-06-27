import React from 'react';
import './QuitButton.css';

const QuitButton = (props) => {
  return (
    <button onClick={props.quitGame} className="quit-button">Quit Game</button>
  );
}

export default QuitButton;
