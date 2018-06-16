import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LudoGrid from './LudoGrid';

import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'





class ShowDice extends Component {

    state  = {
        dice : 6
    }

    rollAll() {
        this.reactDice.rollAll()
      }
      rollDoneCallback(num) {
        console.log(`You rolled a ${num}`)
      }
    componentDidMount(){

        setInterval(()=>{

            this.setState({
                dice : Math.floor(((Math.random()*6))+1)
            })

        },1000);

    }

  render() {
    return (
      <div style={{

             'z-index':'99'
      }}>
     
     <ReactDice
          numDice={1}
          rollDone={this.rollDoneCallback}
          ref={dice => this.reactDice = dice}
        />

      </div>
    );
  }
}

export default ShowDice;

