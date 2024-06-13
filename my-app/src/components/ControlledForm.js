import React, { Component } from 'react'

// Defining a class component called ControlledForm
export class ControlledForm extends Component {
    // Constructor to initialize the state
    constructor(props) {
        super(props)

        // Initializing the state with properties for form fields
        // Why: To manage the values of input fields and select options
        this.state = {
            name: '',
            category: 'website',
            comments: '',
        }
    }

    // Method to handle changes in the form fields
    // How: Updates the state with the new values from the form fields
    // Why: To keep the state in sync with the form field values
    handleNameChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    // Render method to display the component
    // Why: To render the form and input elements
    // How: Uses JSX to create a form with controlled inputs
    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onClick={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label> {/* Label for the input field */}
                        <input
                            value={this.state.name} // Setting the value from the state
                            onChange={this.handleNameChange} // Adding an event listener for the onChange event
                            id="id-name" // Setting the id for the input field
                            name="name" // Setting the name attribute for the input field
                            type="text" // Defining the type of input
                        />
                    </div>
                    <div>
                        <label htmlFor="category">Query category:</label> {/* Label for the select field */}
                        <select
                            id="category" // Setting the id for the select field
                            name="category" // Setting the name attribute for the select field
                            value={this.state.category} // Setting the selected value from the state
                            onChange={this.handleNameChange} // Adding an event listener for the onChange event
                        >
                            <option value="website">Website Issue</option> {/* Option for Website Issue */}
                            <option value="order">Order Issue</option> {/* Option for Order Issue */}
                            <option value="general">General inquiry</option> {/* Option for General inquiry */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label> {/* Label for the textarea field */}
                        <textarea
                            id="id-comments" // Setting the id for the textarea field
                            name="comments" // Setting the name attribute for the textarea field
                            value={this.state.comments} // Setting the value from the state
                            onChange={this.handleNameChange} // Adding an event listener for the onChange event
                        />
                    </div>
                    <input type="submit" value="Submit" /> {/* Submit button */}
                </form>
            </div>
        )
    }
}

export default ControlledForm; // Exporting the ControlledForm component as the default export
