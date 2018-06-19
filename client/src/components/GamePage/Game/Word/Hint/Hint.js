import React, { Component } from 'react';

import {Button } from 'react-bootstrap';

class Hint extends Component {
  constructor(props) {
    super(props)

    // Maintain internal state to keep track of whether hint is showing
    this.state = {visible: false}
  }

  handleClick = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    let hintContent = '';
    let buttonText;

    if (this.state.visible) {
      buttonText = 'Hide Hint'
      hintContent = this.props.definition
    } else {
      buttonText = 'Show Hint'
    }

    return (
      // Check props for what CSS to use
      <div>
        <Button onClick={this.handleClick}>{buttonText}</Button>
        {hintContent}
      </div>
    );
  }
}

export default Hint;
