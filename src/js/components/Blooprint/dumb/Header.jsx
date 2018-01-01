import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

import { SLOGAN, blooprintImage } from '../constants'

const Header = () => {
    return(
        <div id="blooprint_header">

            <div>
                <MediaQuery maxWidth={767}>
                    <div id="title_bars_mobile">
                        <div className="title_bar" id="stripe1" />
                        <div className="title_bar" id="stripe2" />
                        <div className="title_bar" id="stripe3" />
                    </div>
                    <p id="slogan_mobile">{SLOGAN}</p>
                    <Link to={'/'}><img id="trademark_mobile" src={blooprintImage} alt="trademark" /></Link>
                </MediaQuery>

                <MediaQuery minWidth={768}>
                    <div id="title_bars">
                        <div className="title_bar" id="stripe1" />
                        <div className="title_bar" id="stripe2" />
                        <div className="title_bar" id="stripe3" />
                    </div>
                    <p id="slogan">{SLOGAN}</p>
                    <Link to={'/'}><img id="trademark" src={blooprintImage} alt="trademark" /></Link>
                </MediaQuery>
            </div>
        </div>
    )
}

export default Header
