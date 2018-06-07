import React, { Component } from 'react';
import Game from './Game/Game';

class GamePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {}
    }
  }

  componentDidMount = () => {
    this.createGame();
    this.fetchGame();
  }

  createGame = () => {
    //fetch with a post request to create a new game?
  }

  fetchGame = () => {
    fetch('/api/v1/games')
    .then(res => res.json())
    .then(game => {
      this.setState({
        game: game
      });
      console.log(this.state)
    });
  }

  render() {
    return (
      <div className="GamePage" >
        <Game />
      </div>
    );
  }
}

export default GamePage;
