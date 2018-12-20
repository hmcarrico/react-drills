import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arr: ['Hello', 'How are you?', 'Im doing Great!']
    }
  }
  render() {
    return (
      <div>
        {this.state.arr.map((arrItem) => {
          return (
            <div>
            <h1>{arrItem}</h1> <br />
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
