import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LudoGrid from './LudoGrid';
import ShowDice from './ShowDice';



class App extends Component {
  render() {
    return (




      <div className="App">

{/* <ShowDice/> */}
        <header className="App-header">
          <h1 >Ludo</h1>
        </header>
        <p className="App-intro" style={{
        }}>

        </p>

<div style = {{
}} >
<LudoGrid/>
</div>

      </div>
    );
  }
}

export default App;

