import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './dumb/Header'
import Footer from './dumb/Footer'
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
                    <h2>We provide restaurants with:</h2>
                    <ul>
                        <li className="menu_service_detail">a customer-focused and mobile-friendly menu website</li>
                        <li className="menu_service_detail">state-of-the-art user-friendly and web-based menu software</li>
                        <li className="menu_service_detail">total control and maintenance of all menu content</li>
                        <li className="menu_service_detail">restaurant owners can focus on their menu data and entirely leave website maintenance to us</li>
                    </ul>
                    <h2>Our software features:</h2>
                    <ul>
                        <li className="menu_service_detail">worry-free web-based spreadsheet control of menu data</li>
                        <li className="menu_service_detail">menu content security locked under personal email password protection</li>
                        <li className="menu_service_detail">live-time rendering</li>
                        <li className="menu_service_detail"><a href="https://en.wikipedia.org/wiki/Search_engine_optimization">search engine optimization</a></li>
                    </ul>
                    <br />
                    <h3>Your menu has room for unlimited customization.</h3>
                    <p><Link to={'/'}>CONTACT US</Link> for pricing and more information.</p>

                    <Footer />
                </div>




            </div>
        )
    }
}

export default Menus
