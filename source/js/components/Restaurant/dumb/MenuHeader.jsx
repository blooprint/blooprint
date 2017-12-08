import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

class MenuHeader extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
            <MediaQuery maxWidth={767}>
                <div>
                    <h1 className="menu_header" id="mobile_menu_header">{this.props.restaurant.restaurantInfo.map((tableline) => {
                        if( tableline.item == 'name' ) {
                            return (
                                <div onClick={() => {
                                        this.props.action_viewHome()
                                    }}>
                                    {tableline.value}
                                </div>
                            )
                        }
                    })}</h1>

                    <div id="mobile_menu_buttons">
                        <div id="button_breakfast" className="mobile_menu_button" onClick={() => {this.props.action_viewBreakfast()}}><p>break</p></div>
                        <div id="button_lunch_dinner" className="mobile_menu_button" onClick={() => {this.props.action_viewLunchDinner()}}><p>lun | din</p></div>
                        <div id="button_dessert" className="mobile_menu_button" onClick={() => {this.props.action_viewDessert()}}><p>dessert</p></div>
                    </div>
                </div>
            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={991}>
                <div>
                    <h1 className="menu_header" id="mobile_menu_header">{this.props.restaurant.restaurantInfo.map((tableline) => {
                        if( tableline.item == 'name' ) {
                            return (
                                <div onClick={() => {
                                        this.props.action_viewHome()
                                    }}>
                                    {tableline.value}
                                </div>
                            )
                        }
                    })}</h1>

                    <div id="mobile_menu_buttons">
                        <div id="button_breakfast" className="mobile_menu_button" onClick={() => {this.props.action_viewBreakfast()}}><p>breakfast</p></div>
                        <div id="button_lunch_dinner" className="mobile_menu_button" onClick={() => {this.props.action_viewLunchDinner()}}><p>lunch | dinner</p></div>
                        <div id="button_dessert" className="mobile_menu_button" onClick={() => {this.props.action_viewDessert()}}><p>dessert</p></div>
                    </div>
                </div>
            </MediaQuery>

            <MediaQuery minWidth={992}>
                <div>
                    <h1 className="menu_header">{this.props.restaurant.restaurantInfo.map((tableline) => {
                        if( tableline.item == 'name' ) {
                            return (
                                <div onClick={() => {
                                        this.props.action_viewHome()
                                    }}>
                                    {tableline.value}
                                </div>
                            )
                        }
                    })}</h1>

                    <div id="menu_buttons">
                        <div id="button_breakfast" className="menu_button" onClick={() => {this.props.action_viewBreakfast()}}><p>breakfast</p></div>
                        <div id="button_lunch_dinner" className="menu_button" onClick={() => {this.props.action_viewLunchDinner()}}><p>lunch | dinner</p></div>
                        <div id="button_dessert" className="menu_button" onClick={() => {this.props.action_viewDessert()}}><p>dessert</p></div>
                    </div>
                </div>
            </MediaQuery>
            </div>
        )
    }
}

export default MenuHeader
