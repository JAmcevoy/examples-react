import './App.css';  // Importing CSS styles for the App component
// import FunctionalGreeting from './components/FunctionalGreeting';  // Importing the FunctionalGreeting component
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';

// Defining the main App component
function App() {
  return (
    <div className="App">  {/* Main container for the App */}
      {/* <FunctionalGreeting />  Using the FunctionalGreeting component */}
      <FunctionalGreetingWithProps greeting="Nice to meet you" name="John" age="32" />
    </div>
  );
}

// Exporting the App component as the default export
export default App;