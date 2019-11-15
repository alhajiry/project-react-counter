import React from 'react';

class ButtonCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter : 0
        }
    } 

    incrementBitch = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrementBitch = () => {
        this.setState({
            counter: !this.state.counter ? this.state.counter - 0 : this.state.counter - 1 
        })
    }

    resetBitch = () => {
        this.setState({
            counter : this.state.counter = 0
        })
    }

    

    render() {
        return (
            <div>
                <button class="btn button-primary" onClick = {this.incrementBitch}>I've sinned</button>
                <button class="btn button-secondary" onClick = {this.decrementBitch}>I've doing good</button>
                <button class="btn button-reset" onClick = {this.resetBitch}>I repent</button>
            <p id="count-number">{this.state.counter}</p>
            </div>
        )
    }
}

export default ButtonCounter