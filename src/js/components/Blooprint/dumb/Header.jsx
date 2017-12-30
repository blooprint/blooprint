import React from 'react'

var blooprintImage = require('../../../../assets/img/blooprint.jpg')

const Header = () => {
    return(
        <div id="blooprint_header">
            <div id="title_bars">
                <div className="title_bar" id="stripe1" />
                <div className="title_bar" id="stripe2" />
                <div className="title_bar" id="stripe3" />
                <p className="blooprint_header_item" id="slogan">there's structure in software</p>
            </div>
            <img id="trademark" src={blooprintImage} alt="trademark" />
        </div>
    )
}

export default Header
