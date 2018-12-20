import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Image from './component/Image'

class App extends Component {
  constructor(){
    super();
    this.state= {
      image: 'https://i.ytimg.com/vi/xv9vnFXFoV4/hqdefault.jpg'
    }
  }
  render() {
    return (
      <div className="App">
        <Image picpic={this.state.image}/>
      </div>
    );
  }
}

export default App;
