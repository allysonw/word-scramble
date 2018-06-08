import React, { Component } from 'react';
import Word from './Word/Word';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false
    }
  }

  renderWords = () => {
    return this.props.game.words.map(word => {
      return (
          <Word key={word.id} word={word} />
      );
    });
  }

  render() {
    const wordsList = this.renderWords();

    return (
      <div className="Game" >
        {/* Game ID: {this.props.game.id} */}

        {wordsList}
      </div>
    );
  }
}

export default Game;
