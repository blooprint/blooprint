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
        this.socket.on('mountMenuData', function(data) {
            this.handleDataRetrieval(data)
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

    handleDataRetrieval = function(data) {
        if (process.env.NODE_ENV != "production") { // development

            // console.log('\n\nraw data\n',data)
            //
            // const raw_data = {}
            // for ( var x = 0; x < data.length; x++) {
            //     console.log('raw data\t',x,' = ',data[x])
            // }

            // this.props.setSpreadsheetData(
            //     data[client_data.template.section_indexing.restaurant_home],
            //     data[client_data.template.section_indexing.restaurant_hours],
            //     data[client_data.template.section_indexing.breakfast_specials],
            //     data[client_data.template.section_indexing.breakfast_items],
            //     data[client_data.template.section_indexing.lunch_specials],
            //     data[client_data.template.section_indexing.lunch_items],
            //     data[client_data.template.section_indexing.dinner_specials],
            //     data[client_data.template.section_indexing.dinner_items],
            //     data[client_data.template.section_indexing.dessert],
            // )

            this.props.setSpreadsheetDataNew(data)
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

        const { restaurant } = this.props

        // return (
        //     <div id="restaurant">
        //         { restaurant.viewHome ? <RestaurantHome actions={this.props} restaurant={restaurant} restaurantInfo={restaurant.restaurantInfo} /> : <MenuHome actions={this.props} restaurant={restaurant} restaurantInfo={restaurant.restaurantInfo} /> }
        //     </div>
        // )
        return (
            <div>
                <MediaQuery maxWidth={767}>
                    <div id="mobile_restaurant">
                        { restaurant.viewHome ? <RestaurantHome actions={this.props} restaurant={restaurant} restaurantInfo={restaurant.restaurantInfo} /> : <MenuHome actions={this.props} restaurant={restaurant} restaurantInfo={restaurant.restaurantInfo} /> }
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={768} maxWidth={991}>
                    <div id="mobile_restaurant">
                        { restaurant.viewHome ? <RestaurantHome actions={this.props} restaurant={restaurant} restaurantInfo={restaurant.restaurantInfo} /> : <MenuHome actions={this.props} restaurant={restaurant} restaurantInfo={restaurant.restaurantInfo} /> }
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                    <div id="restaurant">
                        { restaurant.viewHome ? <RestaurantHome actions={this.props} restaurant={restaurant} restaurantInfo={restaurant.restaurantInfo} /> : <MenuHome actions={this.props} restaurant={restaurant} restaurantInfo={restaurant.restaurantInfo} /> }
                    </div>
                </MediaQuery>

              </div>
        )
    }
}

export default Menu
