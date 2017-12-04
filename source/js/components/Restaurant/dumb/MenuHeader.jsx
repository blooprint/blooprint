import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

const MenuHeader = (props) => {

    return (
        <div>
        <MediaQuery maxWidth={767}>
            <div>
                <h1 id="mobile_menu_header">{props.restaurantInfo.map((tableline) => {
                    if( tableline.item == 'name' ) {
                        return (
                            <div>
                                {tableline.value}
                            </div>
                        )
                    }
                })}</h1>

                <div id="nav_viewHome" className="nav_button" onClick={() => {props.actions.action_viewHome()}}><p>home</p></div>

                <div id="mobile_menu_buttons">
                    <div id="button_breakfast" className="mobile_menu_button" onClick={() => {props.actions.action_viewBreakfast()}}><p>break</p></div>
                    <div id="button_lunch_dinner" className="mobile_menu_button" onClick={() => {props.actions.action_viewLunchDinner()}}><p>lun | din</p></div>
                    <div id="button_dessert" className="mobile_menu_button" onClick={() => {props.actions.action_viewDessert()}}><p>dessert</p></div>
                </div>
            </div>
        </MediaQuery>

        <MediaQuery minWidth={768} maxWidth={991}>
            <div>
                <h1 id="mobile_menu_header">{props.restaurantInfo.map((tableline) => {
                    if( tableline.item == 'name' ) {
                        return (
                            <div>
                                {tableline.value}
                            </div>
                        )
                    }
                })}</h1>

                <div id="nav_viewHome" className="nav_button" onClick={() => {props.actions.action_viewHome()}}><p>home</p></div>

                <div id="mobile_menu_buttons">
                    <div id="button_breakfast" className="mobile_menu_button" onClick={() => {props.actions.action_viewBreakfast()}}><p>breakfast</p></div>
                    <div id="button_lunch_dinner" className="mobile_menu_button" onClick={() => {props.actions.action_viewLunchDinner()}}><p>lunch | dinner</p></div>
                    <div id="button_dessert" className="mobile_menu_button" onClick={() => {props.actions.action_viewDessert()}}><p>dessert</p></div>
                </div>
            </div>
        </MediaQuery>

        <MediaQuery minWidth={992}>
            <div>
                <h1 id="menu_header">{props.restaurantInfo.map((tableline) => {
                    if( tableline.item == 'name' ) {
                        return (
                            <div>
                                {tableline.value}
                            </div>
                        )
                    }
                })}</h1>

                <div id="nav_viewHome" className="nav_button" onClick={() => {props.actions.action_viewHome()}}><p>home</p></div>

                <div id="menu_buttons">
                    <div id="button_breakfast" className="menu_button" onClick={() => {props.actions.action_viewBreakfast()}}><p>breakfast</p></div>
                    <div id="button_lunch_dinner" className="menu_button" onClick={() => {props.actions.action_viewLunchDinner()}}><p>lunch | dinner</p></div>
                    <div id="button_dessert" className="menu_button" onClick={() => {props.actions.action_viewDessert()}}><p>dessert</p></div>
                </div>
            </div>
        </MediaQuery>
        </div>
    )
}

export default MenuHeader
