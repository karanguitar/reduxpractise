import React, { Component } from 'react';

class Postform extends Component {
    constructor(props){
        super(props);
        this.state={
            title: "",
            body: ""
        }
    }

    onInputChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })

    }

    onSubmit = (event) =>{
        event.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)

        })
        .then((res) =>{
            res.json()
            .then((data) =>{
                console.log(data)
            })
        })
    }


    render() {
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.onInputChange}/>
                    </div>
                    <div>
                        <label>Body</label>
                        <textarea name="body" value={this.state.body} onChange={this.onInputChange}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Postform;
