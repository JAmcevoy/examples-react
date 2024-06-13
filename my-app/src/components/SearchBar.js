import React, { Component } from 'react';
import importedNames from '../names'; // Importing a list of names from a file

// Defining a class component called SearchBar
export class SearchBar extends Component {
    // Constructor to initialize the state
    constructor(props) {
        super(props);

        // Initializing the state with the imported names
        // Why: To manage and filter the list of names based on user input
        this.state = {
            names: importedNames,
        };
    }

    // Method to handle changes in the input field
    // How: Updates the state with the filtered list of names
    // Why: To filter the names based on user input
    handleInputChange = (event) => {
        const inputText = event.target.value.toLowerCase(); // Get the input text and convert to lowercase
        console.log(inputText); // Log the input text for debugging

        // Filter the names based on the input text
        const filteredNames = this.state.names.filter(name => {
            return name.toLowerCase().includes(inputText); // Check if the name includes the input text
        });

        // Update the state with the filtered names
        this.setState({
            names: filteredNames
        });
    };

    // Render method to display the component
    // Why: To render the input field and the list of filtered names
    // How: Uses JSX to create a form and display the list of names
    render() {
        return (
            <div>
                <h1>Name Search</h1> {/* Heading for the component */}
                <p>Matching names found: {this.state.names.length}</p> {/* Display the number of matching names */}
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="search names" // Placeholder text for the input field
                        onChange={(event) => this.handleInputChange(event)} // Event listener for input change
                    />
                </form>
                <div style={{ margin: 'auto' }}> {/* Center the list of names */}
                    {this.state.names.map(name => ( // Iterate over the filtered names and display them
                        <p key={name}>{name}</p> // Display each name as a paragraph
                    ))}
                </div>
            </div>
        );
    }
}

export default SearchBar; // Exporting the SearchBar component as the default export
