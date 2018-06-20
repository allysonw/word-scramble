import React, { Component } from 'react';
import './PlayerInput.css'

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
          <input type="text" placeholder="Your Name" value={this.state.value} onChange={this.handleInput} />
          <button className="save-button" type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default PlayerInput;
