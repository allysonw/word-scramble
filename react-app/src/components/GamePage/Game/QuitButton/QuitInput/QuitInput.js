import React, { Component } from 'react';

import './QuitInput.css';

class QuitInput extends Component {

  handleYesClick = () => {
    this.props.quitGame();
  }

  handleNoClick = () => {
    this.props.dontQuit();
  }

  render() {
    return (
      <div>
        <div className="dimmed-overlay"></div>
        <div className="pop-up-box">
          Are you sure you want to quit?
          <div>
            <button className="quit-answer yes-button" onClick={this.handleYesClick}>Yes</button>
            <button className="quit-answer no-button" onClick={this.handleNoClick}>No</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuitInput;
