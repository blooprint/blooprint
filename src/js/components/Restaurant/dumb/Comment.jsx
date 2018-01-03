import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

class Comment extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="section_comment">{this.props.text}</div>
        )
    }
}

export default Comment
