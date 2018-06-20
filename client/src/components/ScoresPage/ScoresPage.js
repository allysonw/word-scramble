import React, { Component } from 'react';
import Score from './Score/Score';
import LoadingWheel from '../LoadingWheel/LoadingWheel';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchHighScores } from  '../../actions/scoresActions.js';

import { Table, Grid, Col } from 'react-bootstrap';

// Main container component for the Scores page
class ScoresPage extends Component {

  // get the high scores when the page is loaded
  componentDidMount = () => {
    this.props.fetchHighScores();
  }

  // manage loading wheel
  checkStateForScores = () => {
    if (this.props.scores.loading) {
      return <LoadingWheel />;
    } else if (this.props.scores.scores) {
      return this.renderHighScores()
    }
    return '';
  }

  renderHighScores = () => {
    const scoresTableRows = this.props.scores.scores.map(score => <Score key={score.id} score={score} />);

    return (
      <Grid>
        <Col xs={12}>
          <Table style={{backgroundColor: 'white'}}condensed hover>
            <thead>
              <tr>
                <th className="text-center">Player</th>
                <th className="text-center">Score</th>
                <th className="text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              {scoresTableRows}
            </tbody>
          </Table>
        </Col>
      </Grid>
    );
  }

  render() {
    const scoresContent = this.checkStateForScores();

    return (
      <div className="ScoresPage" >
        <div>
          {scoresContent}
        </div>
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
