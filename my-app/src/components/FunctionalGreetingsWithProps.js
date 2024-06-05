import React from "react";  // Importing the React library

// Defining a functional component that accepts props
const FunctionalGreetingWithProps = (props) => {
  // Logging the props to the console for debugging purposes
  console.log(props);

  // Returning a JSX element that uses the 'greeting' prop
  return <h1>Hello, {props.greeting} {props.name}! I see you are {props.age}</h1>;
}

// Exporting the FunctionalGreetingWithProps component as the default export
export default FunctionalGreetingWithProps;