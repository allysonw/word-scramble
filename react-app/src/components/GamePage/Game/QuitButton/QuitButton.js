import React, { Component } from 'react';

import QuitInput from './QuitInput/QuitInput';

import './QuitButton.css';

class QuitButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showQuitInput: false
    }
  }

  showQuitInput = () => {
    this.setState({
      showQuitInput: true
    })
  }

  clearQuitInput = () => {
    this.setState({
      showQuitInput: false
    })
  }

  render() {

    return (
      <div>
        <button onClick={this.showQuitInput} className="quit-button">Quit Game</button>

        {this.state.showQuitInput && <QuitInput quitGame={this.props.quitGame} dontQuit={this.clearQuitInput} />}
      </div>
    );
  }

}

export default QuitButton;
