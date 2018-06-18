import React, { Component } from 'react';
import Score from './Score/Score';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchHighScores } from  '../../actions/scoresActions.js';

// Main container component for the Scores page
class ScoresPage extends Component {

  componentDidMount = () => {
    this.fetchScores();
  }

  renderHighScores = () => {
    return this.props.scores.map(score => {
      return <Score key={score.id} score={score} />
    });
  }

  render() {
    const highScores = this.renderHighScores();

    return (
      <div className="ScoresPage" >
        {highScores}
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
