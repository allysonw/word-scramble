import React, { Component } from 'react';

class PlayerInput extends Component {
  constructor(props) {
    super(props);

    // Maintain internal state to keep track of input value
    this.state = {
      value: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveGame(this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" value={this.state.value} onChange={this.handleInput} />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default PlayerInput;
