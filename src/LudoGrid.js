import React, { Component } from 'react';
// import { Container, Row, div class="inner" } from 'react-grid-system';
import Graph from 'directed-graph';
import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle } from 'react-shapes';

import ShowDice from './ShowDice';




const YELLOWSTART = 2, REDSTART = 28, GREENSTART = 41, BLUESTART = 15, YELLOWEND = 52, GREENEND = 39, BLUEEND = 13, REDEND = 26;


const POSITIONS = {

    START : {
        'y': 2,
        'r': 28,
        'g' : 41,
        'b' : 15

    },
    END : {
        b : 13,
        y : 52,
        r : 26,
        g : 39

    }

}



const styles = {
    'cellStyle': {
        textAlign: 'center',
        //    height : '6vw',
        //    width : '6vw',
        'font-size': '4',

        minWidth: '1vw',
        height: '6vh', /* or whatever width you want. */
        'max-height': '6vh', /* or whatever width you want. */
        'display': 'inline-block',


    }
}

class LudoGrid extends Component {

    state = {
        grid: [

            ['y', 'y', 'y', 'y', 'y', 'y', 'w12', 'w13', 'w14', 'b', 'b', 'b', 'b', 'b', 'b'],
            ['y', 'hy1', 'w', 'w', 'hy2', 'y', 'w11', 'b', 'w15', 'b', 'hb1', 'w', 'w', 'hb2', 'b'],
            ['y', 'w', 'w', 'w', 'w', 'y', 'w10', 'b', 'w16', 'b', 'w', 'w', 'w', 'w', 'b'],
            ['y', 'w', 'w', 'w', 'w', 'y', 'w09', 'b', 'w17', 'b', 'w', 'w', 'w', 'w', 'b'],
            ['y', 'hy3', 'w', 'w', 'hy4', 'y', 'w08', 'b', 'w18', 'b', 'hb3', 'w', 'w', 'hb4', 'b'],
            ['y', 'y', 'y', 'y', 'y', 'y', 'w07', 'b', 'w19', 'b', 'b', 'b', 'b', 'b', 'b'],
            ['w01', 'w02', 'w03', 'w04', 'w05', 'w06', 'X', 'X', 'X', 'w20', 'w21', 'w22', 'w23', 'w24', 'w25',],
            ['w52', 'y', 'y', 'y', 'y', 'y', 'X', 'D', 'X', 'r', 'r', 'r', 'r', 'r', 'w26'],
            ['w51', 'w50', 'w49', 'w48', 'w47', 'w46', 'X', 'X', 'X', 'w32', 'w31', 'w30', 'w29', 'w28', 'w27'],
            ['g', 'g', 'g', 'g', 'g', 'g', 'w45', 'g', 'w33', 'r', 'r', 'r', 'r', 'r', 'r'],
            ['g', 'hg1', 'w', 'w', 'hg2', 'g', 'w44', 'g', 'w34', 'r', 'hr1', 'w', 'w', 'hr2', 'r'],
            ['g', 'w', 'w', 'w', 'w', 'g', 'w43', 'g', 'w35', 'r', 'w', 'w', 'w', 'w', 'r'],
            ['g', 'w', 'w', 'w', 'w', 'g', 'w42', 'g', 'w36', 'r', 'w', 'w', 'w', 'w', 'r'],
            ['g', 'hg3', 'w', 'w', 'hg4', 'g', 'w41', 'g', 'w37', 'r', 'hr3', 'w', 'w', 'hr4', 'r'],
            ['g', 'g', 'g', 'g', 'g', 'g', 'w40', 'w39', 'w38', 'r', 'r', 'r', 'r', 'r', 'r'],
        ],

        rolling: false,

        game: {

            players: {
                'y': {
                    1: 5,
                    2: 'h',
                    3: 'h',
                    4: 'h'
                },
                'g': {
                    1: 'h',
                    2: 'h',
                    3: 'h',
                    4: 'h'
                },
                'r': {
                    1: 'h',
                    2: 'h',
                    3: 'h',
                    4: 'h'

                },
                'b': {
                    1: 'h',
                    2: 'h',
                    3: 'h',
                    4: 'h'

                },
            },

            dice: 6,
            turn: 'y',
            rolled: false
        }
    }

    checkForHome(x, n) {

        for (let y in this.state.game.players[x]) {

            if (this.state.game.players[x][y] == 'h' && y == n)

                switch (x) {

                    case 'y':
                        return <Circle style={
                            {
                                '-webkit-animation': 'spinner 10s 15 linear',

                            }
                        } r={8} fill={{ color: 'yellow' }} stroke={{ color: '#E622A3' }} strokeWidth={1} />;
                    case 'g':
                        return <Circle style={
                            {
                                '-webkit-animation': 'spinner 10s 15 linear',

                            }
                        } r={8} fill={{ color: 'green' }} stroke={{ color: '#E622A3' }} strokeWidth={1} />;
                    case 'b':
                        return <Circle style={
                            {
                                '-webkit-animation': 'spinner 10s 15 linear',

                            }
                        } r={8} fill={{ color: 'blue' }} stroke={{ color: '#E622A3' }} strokeWidth={1} />;
                    case 'r':
                        return <Circle style={
                            {
                                '-webkit-animation': 'spinner 10s 15 linear',

                            }
                        } r={8} fill={{ color: 'red' }} stroke={{ color: '#E622A3' }} strokeWidth={1} />;

                }




        }


    }


    checkForPlayer(num) {

        var actualNum = parseInt(num[1] + num[2]);

        for (var x in this.state.game.players) {
            // console.log(x);

            for (var y in this.state.game.players[x]) {



                if ((this.state.game.players[x][y] == actualNum)) {


                    // console.log(x,y)

                    switch (x) {




                        case 'r':
                            return <Circle style={
                                {
                                    '-webkit-animation': 'spinner 10s 15 linear',

                                }
                            } r={8} fill={{ color: 'red' }} stroke={{ color: '#E622A3' }} strokeWidth={1} />

                        case 'y': return <Circle style={
                            {
                                '-webkit-animation': 'spinner 10s 15 linear',

                            }
                        } r={8} fill={{ color: 'yellow' }} stroke={{ color: '#E622A3' }} strokeWidth={1} />

                        case 'g':
                            return <Circle style={
                                {
                                    '-webkit-animation': 'spinner 10s 15 linear',

                                }
                            } r={8} fill={{ color: 'green' }} stroke={{ color: '#E622A3' }} style={{
                                'margin': 'auto',
                                padding: '10',
                                display: 'block'
                            }} strokeWidth={1} />


                        case 'b':
                            return <Circle style={
                                {
                                    '-webkit-animation': 'spinner 10s 15 linear',

                                }
                            } r={8} fill={{ color: 'blue' }} stroke={{ color: '#E622A3' }} strokeWidth={1} />


                    }



                }


            }



        }


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



    componentDidMount() {





    }


    canMove(v, i) {

        if (i == 6) return true;


        var count =0;
       
        for (let k=1;k<5;k++){

          if ( this.state.game.players[v][k]!= 'h') return true;

        }


console.log(count);
        return false;




    }

    getAllButtonsPosition(){
    
     
    
    }

    onButtonClick(str) {


        if(str.length <2) return

        if(this.canMove(this.state.game.turn,this.state.game.dice)) {


            for(let i=1;i<=4;i++){



            if(this.state.game.players[this.state.game.turn][i] == parseInt(str[1]+str[2]) ){


        var newState = Object.assign({}, this.state);


        newState.game.players[this.state.game.turn][i] = this.state.game.players[this.state.game.turn][i] + 5;

        newState.game.turn = this.getNextTurn(this.state.game.turn);


        console.log(JSON.stringify(newState.game))

        this.setState(newState, ()=>{

            console.log(JSON.stringify(this.state.game))
        })



        return


            }else if (this.state.game.players[this.state.game.turn][i] == 'h' && this.state.game.dice == 6){

                var newState = Object.assign({}, this.state);


                newState.game.players[this.state.game.turn][i] = POSITIONS.START[this.state.game.turn];
  
        
        
                console.log(JSON.stringify(newState.game))
        
                this.setState(newState, ()=>{
        
                    console.log(JSON.stringify(this.state.game))
                })
        return
        

            }
        
        }

        }

    }


    getNextTurn(t){

        var newTurn;

        if (t == 'y') newTurn = 'b';
        else if (t== 'b') newTurn = 'r';
        else if (t == 'r') newTurn = 'g';
        else if (t == 'g') newTurn = 'y';

        return newTurn;


    }


    onDiceRolled(i) {


        var newState = Object.assign({}, this.state);


        newState.game.dice = i

        this.setState(newState)

        if (!this.canMove(this.state.game.turn, i)) {

        


            newState.game.turn = this.getNextTurn(this.state.game.turn);


            this.setState(newState)

        }

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
                                                return <div class="box">
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
                                                return <div class="box"> <div class="inner" style={{
                                                    ...styles.cellStyle,
                                                    backgroundColor: 'blue',

                                                    //'border-style': ' dashed',
                                                    'border-width': ' 1px',

                                                }}>


                                                    {/* {this.state.grid[i][j]}  */}



                                                </div> </div>



                                            case 'g':
                                                return <div class="box"> <div class="inner" style={{
                                                    ...styles.cellStyle,
                                                    backgroundColor: 'green',


                                                    //'border-style': ' dashed',
                                                    'border-width': ' 1px',
                                                }}>





                                                </div> </div>



                                            case 'r':
                                                return <div class="box"> <div class="inner" style={{
                                                    ...styles.cellStyle,
                                                    backgroundColor: 'red',

                                                    //'border-style': ' dashed',
                                                    'border-width': ' 1px',

                                                }}>


                                                    {/* {this.state.grid[i][j]} */}





                                                </div> </div>




                                            case 'D':




                                                return <div class="box"> <div class="inner" onClick={() => {
                                                    // alert('ramy');




                                                }}
                                    

                                                >



                                                    <ShowDice turn={this.state.game.turn} onDiceRolled={(i) => this.onDiceRolled(i)} />

                                  





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

                                            case 'h':
                                                return <div class="box" onClick={() => {

                                                    this.onButtonClick(this.state.grid[i][j])


                                                }} > <div class="inner"
                                                    style={{
                                                        ...styles.cellStyle,
                                                        backgroundColor: 'white',
                                                        color: 'black',

                                                        'border-style': ' solid',
                                                        'border-width': ' 1px',


                                                    }}>




                                                        {this.checkForHome(
                                                            this.state.grid[i][j].charAt(1), this.state.grid[i][j].charAt(2))





                                                        }



                                                    </div>

                                                </div>




                                        }



                                        return <div class="box" onClick={() => {

                                            this.onButtonClick(this.state.grid[i][j])


                                        }}> <div class="inner" style={{
                                            ...styles.cellStyle,
                                            backgroundColor: 'black',
                                            color: 'white',

                                            'border-width': '1px',
                                            'border-color': 'pink',
                                            'borderStyle': 'solid'

                                        }}>

                                                {this.checkForPlayer(this.state.grid[i][j])}

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

