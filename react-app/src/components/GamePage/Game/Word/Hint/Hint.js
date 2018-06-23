import React, { Component } from 'react';

import './Hint.css'

class Hint extends Component {
  constructor(props) {
    super(props)

    // Maintain internal state to keep track of whether hint is showing
    this.state = {visible: false}
  }

  // When the button is clicked, toggle the visibility
  handleClick = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    let hintContent = '';
    let buttonText;

    if (this.state.visible) {
      buttonText = 'Hide Hint'
      hintContent = (<div className="hint-text">{this.props.definition}</div>)
    } else {
      buttonText = 'Show Hint'
    }

    return (
      <div>
        <button className="hint-button" onClick={this.handleClick}>{buttonText}</button>
        <br />
        {hintContent}
      </div>
    );
  }
}

export default Hint;
