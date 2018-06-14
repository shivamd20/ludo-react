import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LudoGrid from './LudoGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 >Ludo</h1>
        </header>
        <p className="App-intro">

<LudoGrid/>

        </p>
      </div>
    );
  }
}

export default App;

