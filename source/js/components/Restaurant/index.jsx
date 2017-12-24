import React, { Component } from 'react'
import { emailConfigs } from '../../containers/Contact/emailConfigs'

import RestaurantHome from './dumb/RestaurantHome'
import MenuHome from './dumb/MenuHome'
import Footer from '../Blooprint/dumb/Footer'
import client_data from '../../../assets/restaurant/clients'

import MediaQuery from 'react-responsive'

class Menu extends Component {

    constructor(props) {
        super(props)

        var io = require('socket.io-client')
        if (process.env.NODE_ENV === "production") {
            console.log('socket.io host server is PRODUCTION mode')
            this.socket = io.connect('http://'+emailConfigs.blooprint+':1235')
        }
        else {
            console.log('socket.io host server is DEV mode')
            this.socket = io.connect('http://localhost:1235')
        }

        this.restaurantName = this.props.match.params.restaurant
    }

    componentWillMount() {
        this.socket.emit('getMenuData', this.restaurantName)
        this.socket.on('mountMenuData', function(data) {
            this.handleDataRetrieval(data)
        }.bind(this))
    }

    componentDidMount() {
        this.handleBrowserTitleChange(this.props.match.params.restaurant) // TODO
    }

    handleBrowserTitleChange = function(title) {
        document.title = title.toUpperCase()
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = '../../../assets/img/food.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    handleDataRetrieval = function(data) {
        this.props.setSpreadsheetData(data)
    }

    render () {

        return (
            <div>
                <MediaQuery maxWidth={767}>
                    <div id="mobile_restaurant">
                        { this.props.location.pathname.includes('/menu') ? <MenuHome {...this.props} /> : <RestaurantHome {...this.props} /> }
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={768} maxWidth={991}>
                    <div id="mobile_restaurant">
                        { this.props.location.pathname.includes('/menu') ? <MenuHome {...this.props} /> : <RestaurantHome {...this.props} /> }
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                    <div id="restaurant">
                        { this.props.location.pathname.includes('/menu') ? <MenuHome {...this.props} /> : <RestaurantHome {...this.props} /> }
                    </div>
                </MediaQuery>
            </div>
        )
    }
}

export default Menu
