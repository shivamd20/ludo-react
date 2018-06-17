import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LudoGrid from './LudoGrid';

import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'





class ShowDice extends Component {

 

    rollAll() {
        this.reactDice.rollAll()
      }
      rollDoneCallback(num) {
        console.log(`You rolled a ${num}`)

        this.props.onDiceRolled();
      }
  

  render() {
    return (
      <div style={{

             'z-index':'99'
      }}>

      {(()=>{

        switch(this.props.turn){

          case 'r':
        return  <ReactDice
          numDice={1}
          faceColor = "red"
          dotColor = "green"
          rollDone={this.props.onDiceRolled}
          ref={dice => this.reactDice = dice}
        />
          
          ;
          case 'g':
        return  <ReactDice
          faceColor="green"
          dotColor = "yellow"
          numDice={1}
          rollDone={this.props.onDiceRolled}
          ref={dice => this.reactDice = dice}
        />
          
          ;
          case 'y':
        return  <ReactDice
          numDice={1}
          faceColor="yellow"
          dotColor = "blue"
          rollDone={this.props.onDiceRolled}
          ref={dice => this.reactDice = dice}
        />
          
          ;
          case 'b':
        return  <ReactDice
          numDice={1}
          faceColor="blue"
          dotColor = "red"
          rollDone={this.props.onDiceRolled}
          ref={dice => this.reactDice = dice}
        />
          
          ;


        }

        return "";


      })()}
     
   

      </div>
    );
  }
}

export default ShowDice;

