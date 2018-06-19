import React from 'react';
import { NavLink } from 'react-router-dom';

import { Jumbotron, Button } from 'react-bootstrap';

import './HomePage.css'

const HomePage = (props) =>
  <Jumbotron className="box">
     <h2>Welcome to Word Scramble!</h2>
     <p>Try to unscramble the words as quickly as you can!</p>

     <NavLink to="/play">
        <button className="play-button"> Play </button>
     </NavLink>

  </Jumbotron>;

export default HomePage;
