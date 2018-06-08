import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import NavBar from '../NavBar/NavBar';
import ScoresPage from '../ScoresPage/ScoresPage'
import GamePage from '../GamePage/GamePage'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      scores: []
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" render={() => <div>Welcome to word scramble!</div>} />
          <Route path="/high-scores" component={ScoresPage}/>
          <Route path="/play" component={GamePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
