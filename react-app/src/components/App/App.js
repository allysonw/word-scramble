import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import NavBar from '../NavBar/NavBar';

import HomePage from '../HomePage/HomePage';
import ScoresPage from '../ScoresPage/ScoresPage';
import GamePage from '../GamePage/GamePage';

// Main component for the application
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app container-fluid">

          <div className="app-content">
            <NavBar />

            <Route exact path="/" component={HomePage} />
            <Route path="/high-scores" component={ScoresPage}/>
            <Route path="/play" component={GamePage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
