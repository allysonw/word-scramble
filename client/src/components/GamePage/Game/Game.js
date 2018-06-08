import React, { Component } from 'react';
import Word from './Word/Word';

class Game extends Component {

  renderWords = () => {
    return this.props.game.words.map(word => {
      return (
        <p>
          <Word key={word.id} word={word} />
        </p>
      );
    });
  }

  render() {
    const wordsList = this.renderWords();

    return (
      <div className="Game" >
        Game ID: {this.props.game.id}

        {wordsList}
      </div>
    );
  }
}

export default Game;
