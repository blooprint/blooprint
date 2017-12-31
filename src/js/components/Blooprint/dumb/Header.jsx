import React from 'react'
import { Link } from 'react-router-dom'

var blooprintImage = require('../../../../assets/img/blooprint.jpg')

const Header = () => {
    return(
        <div id="blooprint_header">
            <div id="title_bars">
                <div className="title_bar" id="stripe1" />
                <div className="title_bar" id="stripe2" />
                <div className="title_bar" id="stripe3" />
                <p className="blooprint_header_item" id="slogan">fitting data to plans</p>
            </div>
            <Link to={'/'}><img id="trademark" src={blooprintImage} alt="trademark" /></Link>
        </div>
    )
}

export default Header
