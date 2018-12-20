import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchBar: '',
      arr: ['lol', 'brb', 'ttyl', 'idk']
    }
  }
  updateState = (e) => {
    this.setState({
      searchBar: e.target.value
    })
  }

  render() {
    const filter = this.state.arr.filter((e) => {
      return e.includes(this.state.searchBar)
    }).map((e) => {
      return <h1>{e}</h1>
    })

    return (
      <div>
        <input onChange={this.updateState} />
        {filter}
      </div>
    );
  }
}

export default App;
