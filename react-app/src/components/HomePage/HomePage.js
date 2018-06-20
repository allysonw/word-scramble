import React from 'react';
import { NavLink } from 'react-router-dom';

import { Jumbotron } from 'react-bootstrap';

import './HomePage.css'

const HomePage = (props) =>
  <Jumbotron className="box">
     <h2>Welcome to Word Scramble!</h2>
     <p>
       Try to solve the scrambled words! <br />
       Your score is based on how quickly you solve all 3 words.
    </p>

     <NavLink to="/play">
        <button className="play-button"> Play </button>
     </NavLink>

  </Jumbotron>;

export default HomePage;
