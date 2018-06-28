import React, { Component } from 'react';
import Game from './Game/Game';
import GameSolution from './GameSolution/GameSolution';
import LoadingWheel from '../LoadingWheel/LoadingWheel';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNewGame, decrementTimer, updateSolvedWordCount, markGameComplete, saveGame, markWordSolved, resetGame } from  '../../actions/gameActions.js';

import './GamePage.css';

// Main container component for the Play page
class GamePage extends Component {

  // Checks to see if a game is loading or has been loaded
  checkStateForGameContent = () => {

    // If loading, returns the loading animation
    if (this.props.game.loading) {
     return (
       <div>
         <LoadingWheel />
         <p className="loading-message">Searching the dictionary for the best words for you... </p>
       </div>

     );

    // If the player quit out of a previous game,
    // show the solved game and the new game button
    } else if (this.props.game.showSolvedGame) {
       this.props.game.words.forEach(word => word.solved = true);

       return (
         <div>
           <button className="new-game-button play-button" onClick={this.props.fetchNewGame}>New Game</button>
           <div>
             <GameSolution words={this.props.game.words} />
           </div>
         </div>
       );
    // If a game has been loaded, returns the game
    } else if ((this.props.game.id !== undefined) &&
              (this.props.game.loading === false)) {

     return <Game game={this.props.game}
                  words={this.props.game.words}
                  onWordSolved={this.handleWordSolved}
                  saveGame={this.savePlayerInputAndGame} calculateScore={this.props.calculateScore}
                  decrementTimer={this.props.decrementTimer}
                  quitGame={this.quitGame} />;

   // Otherwise, show new game button
   } else {
     return (
         <button className="new-game-button play-button" onClick={this.props.fetchNewGame}>New Game</button>
     );
    }
  }

  // Called from the Word component when a word is solved
  handleWordSolved = (wordId) => {

    // update solvedWordCount in state
    this.props.updateSolvedWordCount(wordId);

    // mark the word solved in state
    this.props.markWordSolved(wordId);

    // check for a win
    if (this.props.game.solvedWordCount ===
        this.props.game.words.length) {

      this.props.markGameComplete(this.calculateScore());
    }
  }

  // update state with player name and provide game id and score
  // id so that reducer can make request to API to update game
  // and score in DB. provide history so that once game and score
  // are persisted, we can redirect the user to the high scores page
  savePlayerInputAndGame = (playerName) => {
    this.props.saveGame(this.props.game.id, this.props.game.score.id, playerName, this.props.history);
  }

  // returns the player's score
  calculateScore = () => {
    return this.props.game.countdown
  }

  // quit the game and reset if the player chooses to
  quitGame = () => {
    this.props.resetGame();
  }

  render() {
    // get content for the main Game area
    const gameContent = this.checkStateForGameContent();

    return (
      <div className="GamePage" >
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
    fetchNewGame,
    decrementTimer,
    updateSolvedWordCount,
    saveGame,
    markGameComplete,
    markWordSolved,
    resetGame
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
