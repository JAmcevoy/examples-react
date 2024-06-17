import React, { useState, useEffect } from 'react';

// Defining a functional component called UseEffectCounter
function UseEffectCounter() {
    // Initializing state variables 'count' and 'time' using the useState hook
    // What: useState is used to declare state variables and their updater functions
    // Why: To manage and update the values of 'count' and 'time' within the component
    // How: Initializing 'count' and 'time' with initial values of 0
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    // First useEffect hook to update the document title when 'count' changes
    // What: useEffect is used to perform side effects in functional components
    // Why: To update the document title whenever the 'count' value changes
    // How: The effect sets the document title to the current 'count' value
    useEffect(() => {
        console.log('count effect');
        document.title = count;
    }, [count]); // Dependency array with 'count' ensures the effect runs only when 'count' changes

    // Second useEffect hook to create a timer that updates the 'time' state every second
    // What: This effect sets up a timer that increments 'time' every second
    // Why: To simulate a ticking timer that updates the 'time' state every second
    // How: The effect creates an interval that updates 'time' and cleans up the interval when the component unmounts
    useEffect(() => {
        console.log('Creating timer');
        const interval = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    // Render method to display the component
    // What: The return statement in the functional component provides the JSX that describes the UI
    // Why: To render a button that increments the 'count' and a heading that displays the 'time'
    // How: Uses JSX to create a button and a heading element
    return (
        <div>
            {/* Button to increment the count */}
            <button onClick={() => setCount(count + 1)}>
                Increment Count ({count})
            </button>
            {/* Display the current time */}
            <h2>Time is {time}</h2>
        </div>
    );
}

export default UseEffectCounter; // Exporting the UseEffectCounter component as the default export


