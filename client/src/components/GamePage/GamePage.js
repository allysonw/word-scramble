import React, { Component } from 'react';
import Game from './Game/Game';

class GamePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: null
    }
  }

  fetchNewGame = () => {
    fetch('/api/v1/games/', { method: 'POST'})
    .then(res => res.json())
    .then(game => {
      this.setState({
        game: game
      });
    });
  }

  render() {
    return (
      <div className="GamePage" >
        <button onClick={this.fetchNewGame}>New Game</button>

        {this.state.game ? <Game game={this.state.game}/> : ''}
      </div>
    );
  }
}

export default GamePage;
