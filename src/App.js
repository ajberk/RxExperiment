import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CoolDiv from './CoolDiv'
import Rx from 'rxjs/Rx';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            square0: 'darkgray',
            square1: 'black',
            square2: 'white',
            square3: 'gray',
            square4: 'lightgray',
            square5: 'light-black;'
        };
    }

    componentDidMount = () => {
        const colors$ = Rx.Observable.from(["blue", "purple", "orange", "yellow", "green", "red"]);
        const timer0$ = Rx.Observable.interval(3000);
        const timer1$ = Rx.Observable.interval(1000);
        const timer2$ = Rx.Observable.interval(500);
        const timer3$ = Rx.Observable.interval(2000);
        const timer4$ = Rx.Observable.interval(750);
        const timer5$ = Rx.Observable.interval(1500);

        timer0$.zip(colors$).repeat().subscribe(([index, color]) => this.setColor(0, color));
        timer1$.zip(colors$).repeat().subscribe(([index, color]) => this.setColor(1, color));
        timer2$.zip(colors$).repeat().subscribe(([index, color]) => this.setColor(2, color));
        timer3$.zip(colors$).repeat().subscribe(([index, color]) => this.setColor(3, color));
        timer4$.zip(colors$).repeat().subscribe(([index, color]) => this.setColor(4, color));
        timer5$.zip(colors$).repeat().subscribe(([index, color]) => this.setColor(5, color));
    };

    setColor = (sqaureNumber, color) => {
        this.setState({[`square${sqaureNumber}`]: color})
    };


    render() {
        const colorWheel = Object.values(this.state);
        const squares = [...Array(1000)].map((_, i) => {
            return (
                <CoolDiv key={i} color={colorWheel[i % colorWheel.length]}></CoolDiv>
            );
        });

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className='squares'>
                    {squares}
                </div>
            </div>
        );
    }
}

export default App;
