import React, { Component } from 'react';
import axios from 'axios';

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)
    
        // Initializing state with posts array and error as null
        // Why: To manage the data fetched from the API and handle errors
        this.state = {
             posts: [],
             error: null
        }
    }

    // Lifecycle method to fetch data when the component mounts
    componentDidMount() {
        // Making a GET request to the API to fetch posts
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            // Logging the response to the console
            console.log(response);

            // Setting the state with the fetched posts
            // Why: To update the component with the data from the API
            // How: Using setState to update posts if the response data is an array
            this.setState({
                posts: Array.isArray(response.data)
                ? response.data
                : [response.data]
            });
        })
        .catch(error => {
            // Handling errors if the API request fails
            // Why: To inform the user about the error
            // How: Updating the state with the error message
            this.setState({
                error: error.message
            });
        });
    }

    // Render method to display the component
    // Why: To render the list of posts or an error message
    // How: Using JSX to map through posts and display them
    render() {
        const posts = this.state.posts; // Destructuring posts from state

        return (
            <div>
                <h2>Posts:</h2>
                {
                    // Checking if there are posts to display
                    posts.length ? (
                        posts.map(post => (
                            // Rendering each post
                            <div key={post.id}>
                                <h2>{post.id}. {post.title}</h2>
                                <h4>By User ID {post.userId}</h4>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        ))
                    ) : (
                        // Displaying error message if there's an error
                        // or a loading message if posts are still being fetched
                        this.state.error
                        ? <p>{this.state.error}</p>
                        : <h4>Loading posts ...</h4>
                    )
                }
            </div>
        )
    }
}

export default HTTPRequests;
