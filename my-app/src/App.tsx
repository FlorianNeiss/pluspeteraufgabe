import React, { Component } from 'react';
import './App.css';
import MyClass from './components/MyClass';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <MyClass id={22} ></MyClass>
        </header>
      </div>
    );
  }
}

export default App;
