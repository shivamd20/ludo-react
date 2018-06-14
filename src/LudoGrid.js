import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Graph from 'directed-graph';

var graph = new Graph({
    '1': ['2'],
    '2': ['3'],
    '3': ['4'],
    '4': ['5'],
    '5': ['6'],
    '6': ['7'],
    '7': ['8'],
    '8': ['9'],
    '9': ['10'],
    '10': ['11'],
    '11': ['12'],
    '12': ['13'],
    '13': ['14'],
    '14': ['15'],
    '15': ['16'],
    '16': ['17'],
    '17': ['18'],
    '18': ['19'],
    '19': ['20'],
    '20': ['21'],
    '21': ['22'],
    '22': ['23'],
    '23': ['24'],
    '24': ['25'],
    '25': ['26'],
    '26': ['27'],
    '27': ['28'],
    '28': ['29'],
    '29': ['30'],
    '30': ['31'],
    '31': ['32'],
    '32': ['33'],
    '33': ['34'],
    '34': ['35'],
    '35': ['36'],
    '36': ['37'],
    '37': ['38'],
    '38': ['39'],
    '39': ['40'],
    '40': ['41'],
    '41': ['42'],
    '42': ['43'],
    '43': ['44'],
    '44': ['45'],
    '45': ['46'],
    '46': ['47'],
    '47': ['48'],
    '48': ['49'],
    '49': ['50'],
    '50': ['51'],
    '51': ['52'],
    '52': ['1'],

});




const styles = {
    'cellStyle': {
        height: '40px',
        width: '40px',
        textAlign: 'center',
        'border-style': 'solid',
        'border-width': '1px',


    }
}

class LudoGrid extends Component {

    state = {
        grid: [

            ['y', 'y', 'y', 'y', 'y', 'y', 'w12', 'w13', 'w14', 'b', 'b', 'b', 'b', 'b', 'b'],
            ['y', 'u', 'y', 'u', 'y', 'y', 'w11', 'b', 'b15', 'b', 'b', 'u', 'b', 'u', 'b'],
            ['y', 'y', 'y', 'y', 'y', 'y', 'S10', 'b', 'w16', 'b', 'b', 'b', 'b', 'b', 'b'],
            ['y', 'u', 'y', 'u', 'y', 'y', 'w09', 'b', 'w17', 'b', 'b', 'u', 'b', 'u', 'b'],
            ['y', 'y', 'y', 'y', 'y', 'y', 'w08', 'b', 'w18', 'b', 'b', 'b', 'b', 'b', 'b'],
            ['y', 'y', 'y', 'y', 'y', 'y', 'w07', 'b', 'w19', 'b', 'b', 'b', 'b', 'b', 'b'],
            ['w01', 'y02', 'w03', 'w04', 'w05', 'w6', 'X', 'X', 'X', 'w20', 'w21', 'w22', 'w23', 'S24', 'w25',],
            ['w52', 'y', 'y', 'y', 'y', 'y', 'X', 'D', 'X', 'r', 'r', 'r', 'r', 'r', 'w26'],
            ['w51', 'w50', 'S49', 'w48', 'w47', 'w46', 'X', 'X', 'X', 'w32', 'w31', 'w30', 'w29', 'r28', 'w27'],
            ['g', 'g', 'g', 'g', 'g', 'g', 'w45', 'g', 'w33', 'r', 'r', 'r', 'r', 'r', 'r'],
            ['g', 'g', 'g', 'g', 'g', 'g', 'w44', 'g', 'w34', 'r', 'r', 'r', 'r', 'r', 'r'],
            ['g', 'u', 'g', 'u', 'g', 'g', 'w43', 'g', 'w35', 'r', 'r', 'u', 'r', 'u', 'r'],
            ['g', 'g', 'g', 'g', 'g', 'g', 'w42', 'g', 'S36', 'r', 'r', 'r', 'r', 'r', 'r'],
            ['g', 'u', 'g', 'u', 'g', 'g', 'g41', 'g', 'w37', 'r', 'r', 'u', 'r', 'u', 'r'],
            ['g', 'g', 'g', 'g', 'g', 'g', 'w40', 'w39', 'w38', 'r', 'r', 'r', 'r', 'r', 'r'],
        ],
        pos: 1,

        rolling: false,

        game: {
            'y': {
                1: '',
                2: '',
                3: '',
                4: ''

            },
            'g': {
                1: '',
                2: '',
                3: '',
                4: ''
            }
            , 'r': {
                1: '',
                2: '',
                3: '',
                4: ''

            },
            'b': {
                1: '',
                2: '',
                3: '',
                4: ''

            },

            dice: 6,
            turn: 'y'
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

    setPlayer() {
        var { i, j } = this.findLocation(this.state.pos);

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
        }, 200, 10);


    }



    render() {



        return (
            <Container style={

                {
                    overflow: 'auto',
                    'border-style': ' outset',
                    'border-width': '5px',
                }}>



                {



                    (() => {


                        return this.state.grid.map((y, i) => {
                            return <Row debug style={{
                                ...this.state.cellStyle
                            }}>


                                {
                                    this.state.grid.map((x, j) => {

                                        switch (this.state.grid[i][j].charAt(0)) {

                                            case 'y':
                                                return <Col style={{

                                                    ...styles.cellStyle,

                                                    backgroundColor: 'yellow',


                                                }}>


                                                    {/* {this.state.grid[i][j]} */}

                                                </Col>


                                            case 'b':
                                                return <Col style={{
                                                    ...styles.cellStyle,
                                                    backgroundColor: 'blue',


                                                }}>


                                                    {/* {this.state.grid[i][j]}  */}



                                                </Col>



                                            case 'g':
                                                return <Col style={{
                                                    ...styles.cellStyle,
                                                    backgroundColor: 'green',


                                                }}>


                                                    {/* {this.state.grid[i][j]} */}


                                                </Col>



                                            case 'r':
                                                return <Col style={{
                                                    ...styles.cellStyle,
                                                    backgroundColor: 'red',


                                                }}>


                                                    {/* {this.state.grid[i][j]} */}



                                                </Col>

                                            case 'X':

                                                return <Col />

                                                {/* if (this.state.rolling)
                                                    switch (this.state.dice) {

                                                        case 1:

                                                            return <Col style={{
                                                                ...styles.cellStyle,
                                                                backgroundColor: 'pink',
                                                                color: 'black',
                                                                '-webkit-animation': 'spin 2s infinite linear'

                                                            }} >

                                                                {Math.floor(Math.random() * 6) + 1}

                                                            </Col>

                                                            break;
                                                        case 2:
                                                            return <Col style={{
                                                                ...styles.cellStyle,
                                                                backgroundColor: 'lightpink',
                                                                color: 'black',
                                                                '-webkit-animation': 'spin 1s infinite linear'

                                                            }} >

                                                                {Math.floor(Math.random() * 6) + 1}

                                                            </Col>


                                                            break;
                                                        case 3:
                                                            return <Col style={{
                                                                ...styles.cellStyle,
                                                                backgroundColor: 'gray',
                                                                color: 'black',
                                                                '-webkit-animation': 'spin 0.5s infinite linear'

                                                            }} >

                                                                {Math.floor(Math.random() * 6) + 1}

                                                            </Col>


                                                            break;
                                                        case 4:

                                                            return <Col style={{
                                                                ...styles.cellStyle,
                                                                backgroundColor: 'lightgray',
                                                                color: 'black',
                                                                '-webkit-animation': 'spin 0.2s infinite linear'

                                                            }} >

                                                                {Math.floor(Math.random() * 6) + 1}

                                                            </Col>

                                                            break;
                                                        case 5:

                                                            return <Col style={{
                                                                ...styles.cellStyle,
                                                                backgroundColor: 'brown',
                                                                color: 'black',
                                                                '-webkit-animation': 'spin 2s infinite linear'

                                                            }} >

                                                                {Math.floor(Math.random() * 6) + 1}

                                                            </Col>


                                                            break;
                                                        case 6:
                                                            return <Col style={{
                                                                ...styles.cellStyle,
                                                                backgroundColor: 'orange',
                                                                color: 'black',
                                                                '-webkit-animation': 'spin 1s infinite linear'

                                                            }} >

                                                                {Math.floor(Math.random() * 6) + 1}

                                                            </Col>



                                                            break;

                                                    }

                                                return <Col style={{
                                                    ...styles.cellStyle,
                                                    backgroundColor: 'gray',
                                                    color: 'black',

                                                }} >
                                                    {Math.floor(Math.random() * 6) + 1}

                                                </Col> */}

                                            case 'D':


                                                if (this.state.rolling)

                                                    return <Col onClick={() => {
                                                        // alert('ramy');



                                                        let pos = this.state.pos;

                                                        pos++;

                                                        this.setState({

                                                            pos: pos

                                                        }, () => {
                                                            this.setPlayer();
                                                        })


                                                    }}
                                                        style={{
                                                            ...styles.cellStyle,
                                                            backgroundColor: 'pink',
                                                            color: 'gray',
                                                            'transform': 'scale(3) ',
                                                            'z-index': 50000000,
                                                            position: 'relative',



                                                        }}>

                                                        <div

                                                            style={{
                                                                '-webkit-animation': 'spinner 0.3s 15 linear',
                                                                display: 'block',
                                                                padding: '20%'
                                                            }}

                                                        >{this.state.dice}

                                                            {/* <button>  roll  </button> */}

                                                        </div>



                                                    </Col>
                                                else {
                                                    return <Col onClick={() => {
                                                        // alert('ramy');



                                                        let pos = this.state.pos;

                                                        this.rollDice();

                                                        pos++;

                                                        this.setState({

                                                            pos: pos

                                                        }, () => {
                                                            this.setPlayer();
                                                        })


                                                    }}
                                                        style={{
                                                            ...styles.cellStyle,
                                                            backgroundColor: 'pink',
                                                            color: 'gray',
                                                            'transform': 'scale(3) ',
                                                            'z-index': 50000000,
                                                            position: 'relative',



                                                        }}>

                                                        <div

                                                            style={{
                                                                'transform': 'scale(2)',
                                                                display: 'block',
                                                                padding: '20%'
                                                            }}

                                                        >{this.state.dice}

                                                            {/* <button>  roll  </button>  */}

                                                        </div>



                                                    </Col>
                                                }
                                                break;


                                            case 'S':

                                                return <Col
                                                    style={{
                                                        ...styles.cellStyle,
                                                        backgroundColor: 'pink',
                                                        color: 'gray',


                                                    }}>

                                                    {/* {this.state.grid[i][j]} */}

                                                </Col>





                                        }



                                        return <Col style={{
                                            ...styles.cellStyle,
                                            backgroundColor: 'black',
                                            color: 'white',
                                            'border-style': 'none'

                                        }}> {this.state.grid[i][j]} </Col>




                                    })
                                }

                            </Row>
                        }
                        )


                    })()


                }




            </Container>
        );
    }
}

export default LudoGrid;

