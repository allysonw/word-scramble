import React, { Component } from 'react';
import Score from './Score/Score';
import LoadingWheel from '../LoadingWheel/LoadingWheel';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchHighScores } from  '../../actions/scoresActions.js';

import wheel from '../../images/loading-wheel.png'


// Main container component for the Scores page
class ScoresPage extends Component {

  componentDidMount = () => {
    this.props.fetchHighScores();
  }

  checkStateForScores = () => {
    if (this.props.scores.loading) {
      return <LoadingWheel />;
    } else if (this.props.scores.scores) {
      return this.renderHighScores()
    }
    return '';
  }

  renderHighScores = () => {
    return this.props.scores.scores.map(score => {
      return <Score key={score.id} score={score} />
    });
  }

  render() {
    const scoresContent = this.checkStateForScores();

    return (
      <div className="ScoresPage" >
        <table>
          <th>Player</th>
          <th>Score</th>
          {scoresContent}
        </table>

      </div>
    );
  }
}

// Connection to Redux State
const mapStateToProps = (state) => {
  return ({
    scores: state.scores
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchHighScores: fetchHighScores
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoresPage);
