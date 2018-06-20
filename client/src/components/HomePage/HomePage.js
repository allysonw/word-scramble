import React from 'react';
import { NavLink } from 'react-router-dom';

import { Jumbotron, Button } from 'react-bootstrap';

import './HomePage.css'

const HomePage = (props) =>
  <Jumbotron className="box">
     <h2>Welcome to Word Scramble!</h2>
     <p>Try to solve the scrambled words! Your score is based on the difficulty of the words you solve.</p>

     <NavLink to="/play">
        <button className="play-button"> Play </button>
     </NavLink>

  </Jumbotron>;

export default HomePage;
