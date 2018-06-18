import React, { Component } from 'react';

class PlayerInput extends Component {
  constructor(props) {
    super(props);

    // Maintain internal state to keep track of input value
    this.state = {
      value: '',
    };
  }

  handleInput = e => {

  }

  // Returns true if user input matches "letters" prop (the solution)
  
  render() {
    return (
      <div>
        <label>Name: </label>
        <input type="text" value={this.state.value} onChange={this.handleInput} />
      </div>
    );
  }
}

export default PlayerInput;
