import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ContactBlooprint from '../../components/Blooprint/dumb/Contact'
import Header from './dumb/Header'
import { handleBrowserTitleChange } from '../../functions'

class Blooprint extends Component {

    componentDidMount() {
        handleBrowserTitleChange('Blooprint', 'marker')
    }

    render() {
        return (
            <div className='body'>

                <Header />

                <Link to={'/listing'}><div className="project_button" id="restaurant_button"><p>menu software</p></div></Link>

                <div id="blooprint_center_content">
                    <ContactBlooprint />
                </div>
            </div>

        );
    }
}

export default Blooprint
