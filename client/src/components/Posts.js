import React, { Component } from 'react';

class Posts extends Component {

    constructor(props){
        super(props);
        this.state ={
            posts: []
        }
        }

        componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) =>{
            data.json()
            .then((posts) =>{
            this.setState({
                posts
            })
            })
        })
        }
    
    render() {

        const postItems = this.state.posts.map(post =>{
            return(
                <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </div>
            )
            })

        return (
            <div>
                {postItems}
            </div>
        );
    }
}

export default Posts;
