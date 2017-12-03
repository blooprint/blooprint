import React, { Component } from 'react';
import { Link } from 'react-router-dom'

var blooprintImage = require('../../../assets/img/blooprint.jpg')


class Blooprint extends Component {


    componentDidMount() {

        this.handleBrowserTitleChange('Blooprint')

    }

    handleBrowserTitleChange = function(title) {
        document.title = title
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = '../../../assets/img/marker.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    render() {
        return (
            <div className='body'>

                <div id="blooprint_header">
                    <div id="title_bars">
                        <div className="title_bar" id="stripe1" />
                        <div className="title_bar" id="stripe2" />
                        <div className="title_bar" id="stripe3" />
                        <p className="blooprint_header_item" id="slogan">there's structure in software</p>
                    </div>
                    <img id="trademark" src={blooprintImage} alt="trademark" />
                </div>

                <Link to={'/restaurant'}><div className="project_button" id="restaurant_button"><p>menu software</p></div></Link>

            </div>

        );
    }
}

export default Blooprint
