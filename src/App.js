import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './components/Start.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This is a flux implemented to do list 
        </p>
        <Start/>
      </div>
    );
  }
}

export default App;
