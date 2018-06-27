import React, { Component } from 'react';

import './QuitButton.css';

class QuitButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quitText: "Quit Game",
      quitClicks: 0
    }
  }

  confirmQuit = () => {
    if (this.state.quitClicks > 1) {
      this.props.quitGame();
    }

    this.setState({
      quitText: "Click to Confirm Quit",
      quitClicks: 2
    });
  }

  render() {
    return (
      <button onClick={this.confirmQuit} className="quit-button">{this.state.quitText}</button>
    );
  }

}

export default QuitButton;
