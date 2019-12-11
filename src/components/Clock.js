import React, { Component } from 'react';



class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            fizzbuzz: "qwaszx"
        };

    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.ticking(),
            1000
        );

    }

    componentWillUnmount() {
        clearInterval(this.interval);

    }
    fizzBuzz(a) {

        if (a % 15 === 0) {
            this.setState({ fizzbuzz: 'FizzBuzz' });
            console.log('fizzbuzz');
        } else if (a % 3 === 0) {
            this.setState({ fizzbuzz: 'Fizz' });
            console.log("buzz");
        } else if (a % 5 === 0) {
            this.setState({ fizzbuzz: 'Buzz' });
        } else {
            this.setState({ fizzbuzz: '' })
            console.log("");
        }
    }

    ticking() {
        this.setState({
            date: new Date(),
            fizzBuzz: this.fizzBuzz(this.state.date.getSeconds())


        });

    }




    render() {
        return (
            <div>
                <h1>Hello there!</h1>
                <h2>It is {this.state.date.getSeconds()}.
                <h2>it is {this.state.fizzbuzz}</h2>

                </h2>

            </div>
        );
    }


}


export default Clock;
