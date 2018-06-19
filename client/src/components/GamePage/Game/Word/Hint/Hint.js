import React, { Component } from 'react';

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
        <button onClick={this.handleClick}>{buttonText}</button>
        {hintContent}
      </div>
    );
  }
}

export default Hint;