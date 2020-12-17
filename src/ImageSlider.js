// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {

    constructor(props) {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
            `I am on slide ${this.state.currentSlideIndex}`
        )
    }
}
//  it's initial state should have a property/attribute called currentSlideIndex that starts at 0.
// It should only render out the text 'I am on slide <CURRENT_SLIDE>',
//  where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.