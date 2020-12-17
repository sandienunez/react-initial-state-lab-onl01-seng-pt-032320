import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super() 
        this.state = { 
            secondsLeft: props.initialCount
        }
    }

    render() {
        const message = this.state.secondsLeft == 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
     return( 
        <div>
            {message}
        </div>
     )   
    }
}



// 1. what i learn here  :  learn how to set an intial state based off that component's props

// goal: set the initial state of the bomb: the amount of seconds
//  left on the timer. Since bomb timers can differ, 
//  we'll pass in a prop to our Bomb component to determine what the starting count should be.

// 2. The initial state of Bomb should have a property/attribute called secondsLeft.
// 3. The initial value of secondsLeft should be equal to the initialCount
//  prop of our Bomb component.

// We'll need to learn how to set an intial state based off that component's props. 
// React passes a component's props as an argument into the constructor (i.e., constructor(props)).
//  Remember to call super() on the first line of the constructor
//   (this is required in React components if we are to use this.state in the constructor). 
//   Ultimately, our constructor should look something like this:

//   constructor(props) { //props that this component gets from its parent component
//     super()
//         this.state {
//             secondsLeft: props.initialCount
//         }
//   }

//   render()
//   return(

//     `{this.initialCount} seconds left before I go boom!`
//     else if 0
//         `Boom!`
//   )

//   It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.

// If secondsLeft equals 0, it should render 'Boom!' instead.



