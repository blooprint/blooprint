import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

import Schedule from './Schedule'
import RestaurantMedia from './RestaurantMedia'
import Footer from '../../Blooprint/dumb/Footer'


class RestaurantHome extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <MediaQuery maxWidth={767}>
                    <div id="mobile_restaurant_home">
                        <h1 className="restaurant_home_item">WELCOME TO</h1>
                        <h1 className="restaurant_home_item" id="restaurant_name">{this.props.restaurant.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'name' ) {
                                return (
                                    <div>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h1>

                    <Link to={'/'+this.props.match.params.restaurant+'/menu'}><div className="nav_button"><p className="link">VIEW MENU</p></div></Link>

                        <div>
                            <h4 id="schedule_header" className="schedule_container_item">{this.props.restaurant.restaurantInfo.map((tableline) => {
                                if( tableline.item == 'slogan' ) {
                                    return (
                                        <div>
                                            {tableline.value}
                                        </div>
                                    )
                                }
                            })}</h4>
                            <h4 id="schedule_header" className="schedule_container_item">{this.props.restaurant.restaurantInfo.map((tableline) => {
                                if( tableline.item == 'sub_slogan' ) {
                                    return (
                                        <div>
                                            {tableline.value}
                                        </div>
                                    )
                                }
                            })}</h4>
                            <div className="schedule_container_item" id="schedule_seperator"/>
                            <Schedule className="schedule_container_item" restaurant={this.props.restaurant} />
                        </div>
                    </div>

                    <RestaurantMedia {...this.props} />
                    <Footer />
                </MediaQuery>

                <MediaQuery minWidth={768} maxWidth={991}>
                    <div id="restaurant_home">
                        <h1 className="restaurant_home_item">WELCOME TO</h1>
                        <h1 className="restaurant_home_item" id="restaurant_name">{this.props.restaurant.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'name' ) {
                                return (
                                    <div>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h1>

                    <Link to={'/'+this.props.match.params.restaurant+'/menu'}><div className="nav_button"><p className="link">VIEW MENU</p></div></Link>

                        <div>
                            <h4 id="schedule_header" className="schedule_container_item">{this.props.restaurant.restaurantInfo.map((tableline) => {
                                if( tableline.item == 'slogan' ) {
                                    return (
                                        <div>
                                            {tableline.value}
                                        </div>
                                    )
                                }
                            })}</h4>
                            <h4 id="schedule_header" className="schedule_container_item">{this.props.restaurant.restaurantInfo.map((tableline) => {
                                if( tableline.item == 'sub_slogan' ) {
                                    return (
                                        <div>
                                            {tableline.value}
                                        </div>
                                    )
                                }
                            })}</h4>
                            <div className="schedule_container_item" id="schedule_seperator"/>
                            <Schedule className="schedule_container_item" restaurant={this.props.restaurant} />
                        </div>
                    </div>

                    <RestaurantMedia {...this.props} />
                    <Footer />
                </MediaQuery>

                <MediaQuery minWidth={992}>
                    <div id="restaurant_home">
                        <h1 className="restaurant_home_item">WELCOME TO</h1>
                        <h1 className="restaurant_home_item" id="restaurant_name">{this.props.restaurant.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'name' ) {
                                return (
                                    <div>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h1>

                    <Link to={'/'+this.props.match.params.restaurant+'/menu'}><div className="nav_button"><p className="link">VIEW MENU</p></div></Link>

                        <div>
                            <h4 id="schedule_header" className="schedule_container_item">{this.props.restaurant.restaurantInfo.map((tableline) => {
                                if( tableline.item == 'slogan' ) {
                                    return (
                                        <div>
                                            {tableline.value}
                                        </div>
                                    )
                                }
                            })}</h4>
                            <h4 id="schedule_header" className="schedule_container_item">{this.props.restaurant.restaurantInfo.map((tableline) => {
                                if( tableline.item == 'sub_slogan' ) {
                                    return (
                                        <div>
                                            {tableline.value}
                                        </div>
                                    )
                                }
                            })}</h4>
                            <div className="schedule_container_item" id="schedule_seperator"/>
                            <Schedule className="schedule_container_item" restaurant={this.props.restaurant} />
                        </div>
                    </div>

                    <RestaurantMedia {...this.props} />
                    <Footer />
                </MediaQuery>
            </div>
        )
    }
}

export default RestaurantHome
