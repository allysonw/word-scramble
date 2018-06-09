import React, { Component } from 'react';
import Game from './Game/Game';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNewGame } from  '../../actions/gameActions.js';
import './GamePage.css';
import wheel from '../../images/loading-wheel.png'

class GamePage extends Component {
  checkStateForGameContent = () => {
    if (this.props.game.gameLoading === true) {
     return (
       <div>
         <img src={wheel} className="Loading-wheel" />
       </div>
     );

   } else if ((this.props.game.id !== undefined) &&
              (this.props.game.gameLoading === false)) {
     return <Game game={this.props.game} words={this.props.game.words}/>;

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
  return ({
    game: state.game
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchNewGame: fetchNewGame
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
