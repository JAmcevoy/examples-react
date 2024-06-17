import React, { useState } from 'react';
import UseEffectCounter from './UseEffectCounter';

// Defining a functional component called UseEffectCounterContainer
function UseEffectCounterContainer() {
    // Initializing state variable 'display' using the useState hook
    // What: useState is used to declare the 'display' state variable and its updater function
    // Why: To manage the visibility of the UseEffectCounter component
    // How: Initializing 'display' with a boolean value of true
    const [display, setDisplay] = useState(true);

    return (
        <div>
            {/* Button to toggle the display state */}
            <button onClick={() => setDisplay(!display)}>
                Toggle Display
            </button>
            {/* Conditionally rendering the UseEffectCounter component based on the 'display' state */}
            {display && <UseEffectCounter />}
        </div>
    );
}

export default UseEffectCounterContainer; // Exporting the UseEffectCounterContainer component as the default export
