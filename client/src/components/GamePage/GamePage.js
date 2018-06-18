import React, { Component } from 'react';
import Game from './Game/Game';
import LoadingWheel from '../LoadingWheel/LoadingWheel';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNewGame, updateSolvedWordCount, markGameComplete, saveGame } from  '../../actions/gameActions.js';
import './GamePage.css';

// Main container component for the Play page
class GamePage extends Component {

  // Checks to see if a game is loading or has been loaded
  checkStateForGameContent = () => {

    // If loading, returns the loading animation
    if (this.props.game.loading) {
     return <LoadingWheel />;

    // If a game has been loaded, returns the game
    } else if ((this.props.game.id !== undefined) &&
              (this.props.game.loading === false)) {

     return <Game game={this.props.game} words={this.props.game.words} onWordSolved={this.handleWordSolved} saveGame={this.savePlayerInputAndGame}/>;

   // Otherwise, returns nothing
   } else {
     return '';
    }
  }

  // Called from the Word component when a word is solved
  // Once all words belonging to a game have been solved
  // ...
  handleWordSolved = () => {
    this.props.updateSolvedWordCount();

    // check for a win
    if (this.props.game.solvedWordCount === 1) {
      this.props.markGameComplete(this.props.game.id);
    }
  }

  savePlayerInputAndGame = (playerName) => {
    this.props.saveGame(this.props.game.id, this.calculateScore(), playerName, this.props.history);
  }

  // sums the score of all the words in the game
  calculateScore = () => {
    return this.props.game.words.map(word => word.difficulty).reduce(((totalScore, currentScore) => totalScore + currentScore), 0);
  }

  render() {
    // get content for the main Game area
    const gameContent = this.checkStateForGameContent();

    return (
      <div className="GamePage" >
        <button onClick={this.props.fetchNewGame}>New Game</button>

        {gameContent}
      </div>
    );
  }
}

// Connection to Redux State
const mapStateToProps = (state) => {
  return ({
    game: state.game
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchNewGame: fetchNewGame,
    updateSolvedWordCount: updateSolvedWordCount,
    saveGame: saveGame,
    markGameComplete: markGameComplete
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
