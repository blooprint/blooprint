import React, { Component } from 'react'
import Item from './Item'
import Side from './Side'
import Price from './Price'
import MediaQuery from 'react-responsive'

class SectionComment extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="section_comment">{this.props.text}</div>
        )
    }
}

export default SectionComment
