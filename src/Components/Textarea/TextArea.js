import React, { Component } from 'react'
import './style.css'

class TextArea extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div id='textArea'>
                <h2>Selected Category: {this.props.data.category}</h2>
                <div id="joke">
                    {this.props.data.value}
                </div>
            </div>
        )
    }
}

export default TextArea
