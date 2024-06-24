import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)
    
        // Initializing state with apiResponse as null
        // Why: To store the response from the API after the POST request
        this.state = {
             apiResponse: null
        }
    }
    
    // Method to send a POST request to the API
    // Why: To create a new post and get a response from the server
    // How: Using axios.post with a specified URL and post data
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts', // API endpoint
            {
                title: 'Hello world!', // Post title
                body: 'It works!', // Post body content
                userId: 123, // User ID associated with the post
            }
        ).then(response => {
            // Updating state with the response data
            // Why: To display the response from the server
            // How: Using setState to update apiResponse
            this.setState({
                apiResponse: response.data
            })
        })
    }

    // Render method to display the component
    // Why: To render the button and the API response
    // How: Using JSX to create the button and conditionally display the response
    render() {
        const {apiResponse} = this.state; // Destructuring apiResponse from state

        return (
            <div>
                <button onClick={this.postToApi}>
                    Create Post
                </button>
                {
                    // Checking if apiResponse is not null
                    apiResponse
                    ? (<div>
                        <h1>{apiResponse.title}</h1> 
                        {/* Displaying the title of the response */}
                        <p>Post ID: {apiResponse.id}</p> 
                        {/* Displaying the post ID from the response */}
                        <p>{apiResponse.body}</p> 
                        {/* Displaying the body content of the response */}
                        <p>User ID: {apiResponse.userId}</p> 
                        {/* Displaying the user ID from the response */}
                    </div>)
                    : (<p>Please click the button above</p>) 
                    // Default message if no response yet
                }
            </div>
        )
    }
}

export default HTTPPost
