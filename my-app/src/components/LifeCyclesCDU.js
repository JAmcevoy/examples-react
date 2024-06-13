import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild';

// 1 - 5 in how the method render in console 
// 1
export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log("Constructor called")
        
        super(props)
        this.state = {
            greeting: 'Hello!'
        }
    }

// 3
    updateGreeting = () => {
        console.log("update greeting called")
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello!' ? 'Goodbye!' : 'Hello!'
            }
        })
    }
// 5
    componentDidUpdate() {
        console.log("Component updated")
    }
// 2 , 4 
    render() {
        console.log("Render method called")
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
                <LifeCyclesCDUChild parentGreeting={this.state.greeting} />
            </div>
        )
    }
}

export default LifeCyclesCDU
