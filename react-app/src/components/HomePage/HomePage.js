import React from 'react';
import { NavLink } from 'react-router-dom';

import './HomePage.css'

const HomePage = (props) =>
  <div className="col-md-6 centered-col welcome-box">
     <div className="game-name">WORD SCRAMBLE</div>
     <p className="intro-text">
       Try to solve the scrambled words! <br />
       Your score is based on how quickly you solve all 3 words.
    </p>

     <NavLink to="/play">
        <button className="play-button"> PLAY </button>
     </NavLink>

  </div>;

export default HomePage;
