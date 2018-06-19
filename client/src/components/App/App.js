import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import NavBar from '../NavBar/NavBar';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import HomePage from '../HomePage/HomePage';
import ScoresPage from '../ScoresPage/ScoresPage';
import GamePage from '../GamePage/GamePage';

// Main component for the application
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app container">
        <NavBar />
          {/* <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Word Scramble</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/play">
                Play
              </NavItem>
              <NavItem eventKey={2} href="/high-scores">
                High Scores
              </NavItem>
            </Nav>
          </Navbar> */}

          <Route exact path="/" component={HomePage} />
          <Route path="/high-scores" component={ScoresPage}/>
          <Route path="/play" component={GamePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
