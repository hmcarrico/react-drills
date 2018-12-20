import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        {this.state.text}
      </div>
    );
  }
}

export default App;
