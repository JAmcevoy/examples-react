import React, { useState } from 'react';

// Defining a functional component called UseStateWithObjects
function UseStateWithObjects() {
    // Initializing the state with an object containing firstName and lastName properties
    // Why: To manage the values of the input fields as an object
    // How: Using the useState hook to initialize with an object
    const [name, setName] = useState({ firstName: "", lastName: "" });

    // Render method to display the component
    // Why: To render the form and input elements
    // How: Uses JSX to create a form with controlled inputs
    return (
        <div>
            <form>
                {/* Input field for the first name */}
                <input
                    type="text" // Defining the type of input
                    value={name.firstName} // Setting the value from the state
                    onChange={e => setName({
                        ...name, // Spreading the existing properties to avoid overwriting
                        firstName: e.target.value // Updating the firstName property
                    })}
                />
                {/* Input field for the last name */}
                <input
                    type="text" // Defining the type of input
                    value={name.lastName} // Setting the value from the state
                    onChange={e => setName({
                        ...name, // Spreading the existing properties to avoid overwriting
                        lastName: e.target.value // Updating the lastName property
                    })}
                />
                {/* Displaying the state as a JSON string */}
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    );
}

export default UseStateWithObjects; // Exporting the UseStateWithObjects component as the default export
