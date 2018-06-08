import React, { Component } from 'react';
import Game from './Game/Game';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNewGame } from  '../../actions/gameActions.js';

class GamePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: null
    }
  }

  // fetchNewGame = () => {
  //   fetch('/api/v1/games/', { method: 'POST'})
  //   .then(res => res.json())
  //   .then(game => {
  //     console.log(game);
  //     this.setState({
  //       game: game
  //     });
  //   });
  // }

  render() {
    return (
      <div className="GamePage" >
        <button onClick={this.props.fetchNewGame}>New Game</button>

        {this.state.game ? <Game game={this.state.game}/> : ''}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { game: state.game };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchNewGame: fetchNewGame
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
