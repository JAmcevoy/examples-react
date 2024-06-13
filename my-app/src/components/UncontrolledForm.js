import React, { Component } from 'react';

// Defining a class component called ControlledForm
export class ControlledForm extends Component {
    constructor(props) {
        super(props);

        // Creating refs for accessing DOM elements
        // Why: To directly access input field values without relying on state
        this.inputName = React.createRef();
        this.inputComments = React.createRef();
        this.inputCategory = React.createRef();
    }

    // Method to handle form submission
    // How: Prevents default form submission behavior and logs input values
    // Why: To handle form submission logic, such as validation or sending data
    handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        // Accessing input values directly via refs and logging them
        console.log(this.inputName.current.value);
        console.log(this.inputCategory.current.value);
        console.log(this.inputComments.current.value);
    }

    // Render method to display the component
    // Why: To render the form and input elements
    // How: Uses JSX to create a form with refs for direct DOM access
    render() {
        return (
            <div>
                <h2>Please fill out the form below part 2:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            id="id-name"
                            name="name"
                            type="text"
                            ref={this.inputName} // Assigning ref to access input value
                        />
                    </div>
                    <div>
                        <label htmlFor="category">Query category:</label>
                        <select
                            id="category"
                            name="category"
                            ref={this.inputCategory} // Assigning ref to access select value
                        >
                            <option value="website">Website Issue</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea
                            id="id-comments"
                            name="comments"
                            ref={this.inputComments} // Assigning ref to access textarea value
                        />
                    </div>
                    <input type="submit" value="Submit" /> {/* Submit button */}
                </form>
            </div>
        );
    }
}

export default ControlledForm; // Exporting the ControlledForm component as the default export
