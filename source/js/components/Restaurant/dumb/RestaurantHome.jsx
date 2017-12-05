import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

import MenuHeader from './MenuHeader'
import MenuSection from './MenuSection'
import Schedule from './Schedule'
import RestaurantMedia from './RestaurantMedia'


const RestaurantHome = (props) => {

    var mapURL = ''
    props.restaurantInfo.map((tableline) => {
        if( tableline.item == 'map' ) {
            mapURL = tableline.value
        }
    })
    var fbURL = ''
    props.restaurantInfo.map((tableline) => {
        if( tableline.item == 'facebook' ) {
            fbURL = tableline.value
        }
    })

    return (
        <div>
            <MediaQuery maxWidth={767}>
                <div id="mobile_restaurant_home">
                    <h1 className="restaurant_home_item">WELCOME TO</h1>
                    <h1 className="restaurant_home_item" id="restaurant_name">{props.restaurantInfo.map((tableline) => {
                        if( tableline.item == 'name' ) {
                            return (
                                <div>
                                    {tableline.value}
                                </div>
                            )
                        }
                    })}</h1>

                    <div className="nav_button" onClick={() => {props.actions.action_viewBreakfast()}}><p>view menu</p></div>

                    <div>
                        <h4 id="schedule_header" className="schedule_container_item">{props.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'slogan' ) {
                                return (
                                    <div>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h4>
                        <h4 id="schedule_header" className="schedule_container_item">{props.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'sub_slogan' ) {
                                return (
                                    <div>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h4>
                        <div className="schedule_container_item" id="schedule_seperator"/>
                        <Schedule className="schedule_container_item" restaurant={props.restaurant} />
                    </div>

                </div>
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={991}>
                <div id="restaurant_home">
                    <h1 className="restaurant_home_item">WELCOME TO</h1>
                    <h1 className="restaurant_home_item" id="restaurant_name">{props.restaurantInfo.map((tableline) => {
                        if( tableline.item == 'name' ) {
                            return (
                                <div>
                                    {tableline.value}
                                </div>
                            )
                        }
                    })}</h1>

                    <div className="nav_button" onClick={() => {props.actions.action_viewBreakfast()}}><p>view menu</p></div>

                    <div>
                        <h4 id="schedule_header" className="schedule_container_item">{props.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'slogan' ) {
                                return (
                                    <div>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h4>
                        <h4 id="schedule_header" className="schedule_container_item">{props.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'sub_slogan' ) {
                                return (
                                    <div>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h4>
                        <div className="schedule_container_item" id="schedule_seperator"/>
                        <Schedule className="schedule_container_item" restaurant={props.restaurant} />
                    </div>

                </div>
            </MediaQuery>

            <MediaQuery minWidth={992}>
                <div id="restaurant_home">
                    <h1 className="restaurant_home_item">WELCOME TO</h1>
                    <h1 className="restaurant_home_item" id="restaurant_name">{props.restaurantInfo.map((tableline) => {
                        if( tableline.item == 'name' ) {
                            return (
                                <div>
                                    {tableline.value}
                                </div>
                            )
                        }
                    })}</h1>

                    <div className="nav_button" onClick={() => {props.actions.action_viewBreakfast()}}><p>view menu</p></div>

                    <div>
                        <h4 id="schedule_header" className="schedule_container_item">{props.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'slogan' ) {
                                return (
                                    <div>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h4>
                        <h4 id="schedule_header" className="schedule_container_item">{props.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'sub_slogan' ) {
                                return (
                                    <div>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h4>
                        <div className="schedule_container_item" id="schedule_seperator"/>
                        <Schedule className="schedule_container_item" restaurant={props.restaurant} />
                    </div>

                </div>
            </MediaQuery>

            <RestaurantMedia mapURL={mapURL} fbURL={fbURL} />
        </div>
    )
}

export default RestaurantHome
