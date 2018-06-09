import React, { Component } from 'react';
import Word from './Word/Word';

class Game extends Component {

  renderWords = () => {
    return this.props.words.map(word => {
      return (
          <Word key={word.id} word={word} onWordSolved={this.props.onWordSolved}/>
      );
    });
  }

  render() {
    let gameContent;

    if (!this.props.game.complete) {
      gameContent = this.renderWords();
    } else {
      gameContent = 'You Won!'
    }

    return (
      <div className="Game" >
        {gameContent}
      </div>
    );
  }
}

export default Game;
