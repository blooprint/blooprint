import React from 'react'
import { Link } from 'react-router-dom'
import { SLOGAN } from '../constants'

const Footer = () => {
    return(
        <div className="restaurant_home_item" id="footer">
            <p id="signature">built by <Link to={'/'}><span id="reg">blooprint &reg;</span></Link> {SLOGAN}</p>
        </div>
    )
}

export default Footer
