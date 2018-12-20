import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTen from './component/AddTen'

class App extends Component {
  constructor(){
    super();
    this.state = {
      number: 0
    }
  }

  updateNum = (e) => {
    this.setState({number: parseInt(e.target.value)})
  }
  render() {
    return (
      <div>
        <input onChange={this.updateNum}/> <br />
        <span>
        PROPS RENDERED HERE: <AddTen ThisIsStateBeingPassedThroughProps={this.state.number} />
        </span>
      </div>
    )
  }
}

export default App;
