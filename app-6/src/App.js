import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './componentss/todo'

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentItem: '',
      list: []
    }
  }

    setCurrentItem = (val) => {
      this.setState({
        currentItem: val
        
      })
    }

    setTheList = () => {
      let current = this.state.currentItem;
      let arr = this.state.list.slice();
      arr.push(current);
      this.setState({
        list: arr,
        currentItem: ''
      })
    }

  render() {
    return (
      <div className="App">
        <input value={this.state.currentItem} onChange={(e) => this.setCurrentItem(e.target.value)} />
        <button onClick={this.setTheList}>Add</button>
        <Todo list={this.state.list}/>
      </div>
    );
  }
}

export default App;
