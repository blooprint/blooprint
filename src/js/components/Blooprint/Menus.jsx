import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './dumb/Header'
import { handleBrowserTitleChange } from '../../functions'

class Menus extends Component {

    componentDidMount() {
        handleBrowserTitleChange('Menu Listings', 'food')
    }

    render() {
        return (
            <div className='body'>

                <Header />

                <div id="services">
                    <h2 className="menu_service_center">We provide restaurants with</h2>
                    <ul className="menu_service_topic">
                        <li>a customer-focused and mobile-friendly <Link to={'/listing/listed'}>menu website</Link></li>
                        <li>state-of-the-art, user-friendly and web-based <a href="https://github.com/blooprint/menus" target="_blank">menu software</a></li>
                        <li>total control and maintenance of all menu content</li>
                        <li>restaurant owners can focus on their menu data and entirely leave website maintenance and software structure to us</li>
                    </ul>
                    <h2 className="menu_service_center">Our software features</h2>
                    <ul className="menu_service_topic">
                        <li>worry-free web-based <a href="https://www.google.com/sheets/about/" target="_blank">spreadsheet control</a> of menu data</li>
                        <li>menu content security locked under personal email password protection</li>
                        <li>live-time rendering</li>
                        <li><a href="https://en.wikipedia.org/wiki/Search_engine_optimization">search engine optimization</a></li>
                    </ul>
                    <br />
                    <h3 className="menu_service_center">Your menu has room for unlimited customization.</h3>
                    <p className="menu_service_center"><Link to={'/'}>CONTACT US</Link> for pricing and more information.</p>
                </div>




            </div>
        )
    }
}

export default Menus
