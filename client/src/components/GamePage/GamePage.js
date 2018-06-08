import React, { Component } from 'react';
import Game from './Game/Game';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNewGame } from  '../../actions/gameActions.js';
import './GamePage.css';
import wheel from '../../images/loading-wheel.png'

class GamePage extends Component {
  // Game page should do 1 of 3 things depending on this.props.game.gameLoaded
  // if false -> render nothing
  // if fa -> render loading wheel
  // if game object e.g. {id: 0, words: []} -> render Game component
  checkStateForGameContent = () => {

     if (this.props.gameLoading === true) {
       return <img src={wheel} className="Loading-wheel" />
     } else if (this.props.game !== undefined) {
       return <Game game={this.props.game}/>
     } else {
       return '';
     }
  }

  render() {
    const gameContent = this.checkStateForGameContent();

    return (
      <div className="GamePage" >
        <button onClick={this.props.fetchNewGame}>New Game</button>

        {gameContent}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
           game: state.game.game,
           gameLoading: state.game.gameLoading
         };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchNewGame: fetchNewGame
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
