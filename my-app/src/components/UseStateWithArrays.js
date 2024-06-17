import React, { useState } from 'react'; // Importing React and the useState hook from the 'react' module

// Defining a functional component called UseStateWithArrays
function UseStateWithArrays() {
    // Initializing the state with an array of numbers
    // Why: To keep track of the list of numbers in the component's state
    // How: Using the useState hook to initialize with the array [1, 2, 3]
    const [nums, setNums] = useState([1, 2, 3]);

    // Method to add a new number to the array
    // Why: To allow users to add a new item to the list
    // How: Updating the state with a new array that includes the next number in sequence
    const addNums = () => {
        // Create a new array that includes all items in nums plus the next number
        setNums([...nums, nums.length + 1]);
    };

    // Method to remove the last number from the array
    // Why: To allow users to remove the last item from the list
    // How: Updating the state with a new array that excludes the last item
    const removeNum = () => {
        // Create a new array that includes all items except the last one
        setNums(nums.filter((item, idx) => idx !== nums.length - 1));
    };

    // Rendering the component
    // Why: To display the UI for adding/removing items and showing the list of numbers
    // How: Using JSX to create the UI structure
    return (
        <div>
            {/* Button to add a new number */}
            <button onClick={addNums}>Add Item</button>
            
            {/* Button to remove the last number */}
            <button onClick={removeNum}>Remove Item</button>
            
            {/* Unordered list to display the numbers */}
            <ul>
                {/* Mapping over the nums array and rendering each number as a list item */}
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    );
}

export default UseStateWithArrays; // Exporting the UseStateWithArrays component as the default export
