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
        if (process.env.NODE_ENV == "production") {
            console.log('socket.io host server is PRODUCTION mode')
            this.socket = io.connect('http://' + emailConfigs.blooprint + ':1235')
        }
        else {
            console.log('socket.io host server is DEV mode')
            this.socket = io.connect('http://localhost:1235')
        }
    }

    componentWillMount() {
        this.socket.emit('getMenuData')
        this.socket.on('mountMenuData', function(data, sheet) {
            this.handleDataRetrieval(data, sheet)
        }.bind(this))
    }

    componentDidMount() {


        if (process.env.NODE_ENV != "production") { // development
            this.handleBrowserTitleChange(client_data.template.browser_title)
        }
        else { // production
            this.handleBrowserTitleChange(client_data.client_00000.browser_title)
        }

    }

    handleBrowserTitleChange = function(title) {
        document.title = title
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = '../../../assets/img/food.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    handleDataRetrieval = function(data, whichSheet) {
        if (process.env.NODE_ENV != "production") { // development

            if(whichSheet == 'motherload') this.props.setSpreadsheetDataNew(data)
            else if(whichSheet == 'ncfr') {
                this.props.setSpreadsheetData(
                    data[client_data.template.section_indexing.restaurant_home],
                    data[client_data.template.section_indexing.restaurant_hours],
                    data[client_data.template.section_indexing.breakfast_specials],
                    data[client_data.template.section_indexing.breakfast_items],
                    data[client_data.template.section_indexing.lunch_specials],
                    data[client_data.template.section_indexing.lunch_items],
                    data[client_data.template.section_indexing.dinner_specials],
                    data[client_data.template.section_indexing.dinner_items],
                    data[client_data.template.section_indexing.dessert],
                )
            }
        }
        else { // production

            // this.props.setSpreadsheetData(
            //     data[client_data.client_00000.section_indexing.restaurant_home],
            //     data[client_data.client_00000.section_indexing.restaurant_hours],
            //     data[client_data.client_00000.section_indexing.breakfast_specials],
            //     data[client_data.client_00000.section_indexing.breakfast_items],
            //     data[client_data.client_00000.section_indexing.lunch_specials],
            //     data[client_data.client_00000.section_indexing.lunch_items],
            //     data[client_data.client_00000.section_indexing.dinner_specials],
            //     data[client_data.client_00000.section_indexing.dinner_items],
            //     data[client_data.client_00000.section_indexing.dessert],
            // )
        }
    }

    render () {

        return (
            <div>
                <MediaQuery maxWidth={767}>
                    <div id="mobile_restaurant">
                        { this.props.restaurant.viewHome ? <RestaurantHome {...this.props} /> : <MenuHome {...this.props} /> }
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={768} maxWidth={991}>
                    <div id="mobile_restaurant">
                        { this.props.restaurant.viewHome ? <RestaurantHome {...this.props} /> : <MenuHome {...this.props} /> }
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                    <div id="restaurant">
                        { this.props.restaurant.viewHome ? <RestaurantHome {...this.props} /> : <MenuHome {...this.props} /> }
                    </div>
                </MediaQuery>
            </div>
        )
    }
}

export default Menu
