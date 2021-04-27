import React, { Component } from 'react'
import './style.css'

class TextArea extends Component {

    render() {
        return (
            <div id='textArea'>
                <h2>Selected Category: {this.props.jokes.categories[0] || ""}</h2>
                <div id="joke">
                    <p>{this.props.jokes.value}</p>
                </div>
                <button key={null} className="btn" onClick={ () => this.props.fetchJokes(this.props.jokes.categories)}><b>New Joke</b></button>
            </div>
        )
    }
}

export default TextArea
