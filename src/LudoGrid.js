import React, { Component } from 'react';
// import { Container, Row, div class="inner" } from 'react-grid-system';
import Graph from 'directed-graph';
import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle } from 'react-shapes';

import ShowDice from './ShowDice';


import Grid from 'material-ui/Grid';



const YELLOWSTART = 2, REDSTART = 28, GREENSTART = 41, BLUESTART = 15, YELLOWEND = 52, GREENEND = 39, BLUEEND = 13, REDEND = 26;




const styles = {
    'cellStyle': {
        textAlign: 'center',
        // 'border-style': 'solid',
        // 'border-width': '1px',
    //    height : '6vw',
    //    width : '6vw',
       'font-size' : '4',

       minWidth :'1vw',
       height:'6vh', /* or whatever width you want. */
       'max-height':'6vh', /* or whatever width you want. */
       'display': 'inline-block',


    }
}

class LudoGrid extends Component {

    state = {
        grid: [

            ['y', 'y', 'y', 'y', 'y', 'y', 'w12', 'w13', 'w14', 'b', 'b', 'b', 'b', 'b', 'b'],
            ['y', 'u', 'w', 'w', 'u', 'y', 'w11', 'b', 'w15', 'b', 'u', 'w', 'w', 'u', 'b'],
            ['y', 'w', 'w', 'w', 'w', 'y', 'w10', 'b', 'w16', 'b', 'w', 'w', 'w', 'w', 'b'],
            ['y', 'w', 'w', 'w', 'w', 'y', 'w09', 'b', 'w17', 'b', 'w', 'w', 'w', 'w', 'b'],
            ['y', 'u', 'w', 'w', 'u', 'y', 'w08', 'b', 'w18', 'b', 'u', 'w', 'w', 'u', 'b'],
            ['y', 'y', 'y', 'y', 'y', 'y', 'w07', 'b', 'w19', 'b', 'b', 'b', 'b', 'b', 'b'],
            ['w01', 'w02', 'w03', 'w04', 'w05', 'w06', 'X', 'X', 'X', 'w20', 'w21', 'w22', 'w23', 'w24', 'w25',],
            ['w52', 'y', 'y', 'y', 'y', 'y', 'X', 'D', 'X', 'r', 'r', 'r', 'r', 'r', 'w26'],
            ['w51', 'w50', 'w49', 'w48', 'w47', 'w46', 'X', 'X', 'X', 'w32', 'w31', 'w30', 'w29', 'w28', 'w27'],
            ['g', 'g', 'g', 'g', 'g', 'g', 'w45', 'g', 'w33', 'r', 'r', 'r', 'r', 'r', 'r'],
            ['g', 'u', 'w', 'w', 'u', 'g', 'w44', 'g', 'w34', 'r', 'u', 'w', 'w', 'u', 'r'],
            ['g', 'w', 'w', 'w', 'w', 'g', 'w43', 'g', 'w35', 'r', 'w', 'w', 'w', 'w', 'r'],
            ['g', 'w', 'w', 'w', 'w', 'g', 'w42', 'g', 'w36', 'r', 'w', 'w', 'w', 'w', 'r'],
            ['g', 'u', 'w', 'w', 'u', 'g', 'w41', 'g', 'w37', 'r', 'u', 'w', 'w', 'u', 'r'],
            ['g', 'g', 'g', 'g', 'g', 'g', 'w40', 'w39', 'w38', 'r', 'r', 'r', 'r', 'r', 'r'],
        ],

        rolling: false,

        game: {

            players : {
            'y': {
                1: 1,
                2: 2,
                3: 3,
                4: 4

            },
            'g': {
                1: 5,
                2: 6,
                3: 7,
                4: 8
            }
            , 'r': {
                1: 9,
                2: 10,
                3: 11,
                4: 12

            },
            'b': {
                1: 14,
                2: 15,
                3: 16,
                4: 18

            },},

            dice: 6,
            turn: 'y'
        }
    }


    checkForPlayer(num) {

var actualNum = parseInt(num[1]+num[2]);

for (var x in this.state.game.players){
    // console.log(x);

for(var y in this.state.game.players[x]){



if(this.state.game.players[x][y] == actualNum){

    console.log(x)

    switch (x){




        case 'r':
        return   <Circle style={
            {
                '-webkit-animation': 'spinner 10s 15 linear',

            }
        } r={8} fill={{ color: 'red' }} stroke={{ color: '#E622A3' }} strokeWidth={1} />

        case 'y':     return   <Circle style={
            {
                '-webkit-animation': 'spinner 10s 15 linear',

            }
        } r={8} fill={{ color: 'yellow' }} stroke={{ color: '#E622A3' }} strokeWidth={1} />

        case 'g': 
        return   <Circle style={
            {
                '-webkit-animation': 'spinner 10s 15 linear',

            }
        } r={8} fill={{ color: 'green' }} stroke={{ color: '#E622A3' }} style = {{
            'margin': 'auto',
            padding: '10',
            display: 'block'
        }} strokeWidth={1} />


case 'b':
            return   <Circle style={
            {
                '-webkit-animation': 'spinner 10s 15 linear',

            }
        } r={8} fill={{ color: 'blue' }} stroke={{ color: '#E622A3' }} strokeWidth={1} />


    }

 
    
}


}



}


        // console.log(i,j);

        // if(this.findLocation(i,j)){

        //     var {x,y} = this.findLocation(i,j);

        //     // console.log(x,y);


        // }



    }

    findLocation(num) {


        for (let i = 0; i < 15; i++)
            for (let j = 0; j < 15; j++) {

                if (this.state.grid[i][j].length > 1) {

                    var d = this.state.grid[i][j];

                    if (parseInt(d[1] + d[2]) == num) {

                        return { i, j };

                    }

                }

            }



    }

    setPlayer() {
        // var { i, j } = this.findLocation(this.state.pos);

        var i = this.state.game.players.y["1"];
        var j = this.state.game.players.g["2"];

        var newArray = this.state.grid.map(function (arr) {
            return arr.slice();
        });

        newArray[i][j] = newArray[i][j] + 'p';


        this.setState({
            grid: newArray
        })

    }

    componentDidMount() {


        this.setPlayer();

        this.rollDice();


    }


    rollDice() {

        var self = this;

        function setIntervalX(callback, delay, repetitions) {

            self.setState({
                rolling: true
            })

            var x = 0;
            var intervalID = window.setInterval(function () {

                callback();

                if (++x === repetitions) {
                    window.clearInterval(intervalID);

                    self.setState({
                        rolling: false
                    })

                }
            }, delay);
        }
        setIntervalX(() => {

            this.setState({
                dice: Math.floor(Math.random() * 6) + 1
            });
        }, 100, 40);


    }



    render() {



        return (
            <div class="grid">


                {



                    (() => {


                        return this.state.grid.map((y, i) => {
                            return <div class="row">


                                {
                                    this.state.grid.map((x, j) => {

                                        switch (this.state.grid[i][j].charAt(0)) {

                                            

                                            case 'y':
                                                return   <div class="box">
                                                <div class="inner" style={{

                                                    ...styles.cellStyle,

                                                    backgroundColor: 'yellow',

                                                    //'border-style': ' dashed',
                                                    'border-width': ' 1px',


                                                }}>


                                                    {/* {this.state.grid[i][j]} */}

                                                </div>

                                                </div>


                                            case 'b':
                                                return   <div class="box"> <div class="inner" style={{
                                                    ...styles.cellStyle,
                                                    backgroundColor: 'blue',

                                                    //'border-style': ' dashed',
                                                    'border-width': ' 1px',

                                                }}>


                                                    {/* {this.state.grid[i][j]}  */}



                                                </div> </div>



                                            case 'g':
                                                return   <div class="box"> <div class="inner" style={{
                                                    ...styles.cellStyle,
                                                    backgroundColor: 'green',


                                                    //'border-style': ' dashed',
                                                    'border-width': ' 1px',
                                                }}>





                                                </div> </div>



                                            case 'r':
                                                return  <div class="box"> <div class="inner" style={{
                                                    ...styles.cellStyle,
                                                    backgroundColor: 'red',

                                                    //'border-style': ' dashed',
                                                    'border-width': ' 1px',

                                                }}>


                                                    {/* {this.state.grid[i][j]} */}





                                                </div> </div>

                                      


                                            case 'D':


                                               

                                                    return  <div class="box"> <div class="inner" onClick={() => {
                                                        // alert('ramy');



                                                        let pos = this.state.pos;

                                                        pos++;

                                                        this.setState({

                                                            pos: pos

                                                        }, () => {
                                                            this.setPlayer();
                                                        })

                                                        this.rollDice();

                                                    }}
                                                        // style={{
                                                        //     ...styles.cellStyle,
                                                        //     backgroundColor: 'pink',
                                                        //     color: 'gray',
                                                        //     // 'transform': 'scale(3) ',
                                                        //     'z-index': 50000000,
                                                        //     position: 'relative',

                                                        //     //'border-style': ' dashed',
                                                        //     'border-width': ' 1px',



                                                        // }}
                                                        
                                                        >

                                                       
                                                        
                                                        {/* {this.state.dice} */}

                                                        <ShowDice/>

                                                            {/* <button>  roll  </button> */}

                                                      



                                                    </div>

                                                    </div>
                                               
                                                break;


                                            case 'S':

                                                return <div class="box"> <div class="inner"
                                                    style={{
                                                        ...styles.cellStyle,
                                                        backgroundColor: 'pink',
                                                        color: 'gray',

                                                        //'border-style': ' dashed',
                                                        'border-width': ' 1px',


                                                    }}>

                                                    {/* {this.state.grid[i][j]} */}

                                                </div>
                                                </div>

                                            case 'u':
                                                return <div class="box"> <div class="inner"
                                                    style={{
                                                        ...styles.cellStyle,
                                                        backgroundColor: 'white',
                                                        color: 'black',

                                                        'border-style': ' solid',
                                                        'border-width': ' 1px',


                                                    }}>

                                                    {/* {this.state.grid[i][j]} */}

                                                </div>

                                                </div>




                                        }



                                        return  <div class="box"> <div class="inner" style={{
                                            ...styles.cellStyle,
                                            backgroundColor: 'black',
                                            color: 'white',
                                            'border-style': 'none',

                                            //'border-style': ' dashed',
                                            'border-width': ' 1px',

                                        }}> 
                                        
                                       { this.checkForPlayer(this.state.grid[i][j])}

                                        {/* {this.state.grid[i][j]} */}
                                        
                                         </div>

                                         </div>




                                    })
                                }



                            </div>
                        }
                        )


                    })()


                }




            </div>
        );
    }
}

export default LudoGrid;

