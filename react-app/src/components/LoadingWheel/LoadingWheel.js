import React from 'react';
import './LoadingWheel.css';
import wheel from '../../images/loading-wheel.png'

const LoadingWheel = (props) =>
  <div>
    <img alt="loading" src={wheel} className="Loading-wheel" />
  </div>;

export default LoadingWheel;
