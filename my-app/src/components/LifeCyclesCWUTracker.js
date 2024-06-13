import React, { Component } from 'react'

// Define a class component LifeCyclesCWUTracker
export class LifeCyclesCWUTracker extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props)

    // Initial state with mouse coordinates
    // Why: To keep track of the mouse's X and Y positions on the screen
    this.state = {
      mouseX: 0,
      mouseY: 0,
    }
  }

  // Method to track mouse movement
  // How: This method is triggered whenever the mouse moves and updates the state with the current mouse coordinates
  // Why: To dynamically update and display the mouse position
  trackMouse = e => {
    console.log('Mouse moved')
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
    })
  }

  // Lifecycle method called when the component is mounted
  // How: Adds an event listener for mouse movement
  // Why: To start tracking the mouse position as soon as the component is added to the DOM
  componentDidMount() {
    window.addEventListener('mousemove', this.trackMouse);
  }

  // Lifecycle method called just before the component is unmounted
  // How: Removes the event listener for mouse movement
  // Why: To prevent memory leaks and unnecessary updates when the component is no longer needed
  componentWillUnmount() {
    console.log("Unmounting")
    window.removeEventListener('mousemove', this.trackMouse) // Fixed event type from 'mouseover' to 'mousemove'
  }

  // Render method to display the component
  // How: Returns JSX to render the component UI
  // Why: To show the user the current mouse position
  render() {
    return (
      <div>
        <h1>Tracking Mouse...</h1>
        <p>X: {this.state.mouseX} Y: {this.state.mouseY}</p>
      </div>
    )
  }
}

export default LifeCyclesCWUTracker
