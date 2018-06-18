import React, { Component } from 'react';
import Word from './Word/Word';
import PlayerInput from './PlayerInput/PlayerInput'

// Game component holds the words that make up the game
class Game extends Component {

  // Set up list of words to show to the user
  renderWords = () => {
    return this.props.words.map(word => {
      return (
          <Word key={word.id} word={word} onWordSolved={this.props.onWordSolved}/>
      );
    });
  }

  render() {
    let gameContent;

    // If the game is over, don't render the words
    if (!this.props.game.complete) {
      gameContent = this.renderWords();
    } else {
      gameContent = <PlayerInput saveGame={this.props.saveGame}/>
    }

    return (
      <div className="Game" >
        {gameContent}
      </div>
    );
  }
}

export default Game;
