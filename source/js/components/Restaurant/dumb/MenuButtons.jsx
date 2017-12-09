import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import MenuButton from './MenuButton'

class MenuButtons extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="mobile_menu_buttons">
                {
                    this.props.restaurant.menus.map((menuObject, index) => {
                        const currentMenu = menuObject[0][0].menu
                        return (
                            <div id="button_breakfast" className="mobile_menu_button" onClick={() => this.props.setOpenedMenu(index)} >
                                {currentMenu}
                            </div>
                        )
                    })
                }
            </div>
        )
        // return (
        //     <div id="mobile_menu_buttons">
        //         {
        //             this.props.restaurant.menus.map((menuObject) => {
        //                 const currentMenu = menuObject[0][0].menu
        //                 return (
        //                     <div id="button_breakfast" className="mobile_menu_button" onClick={() => {
        //                             if(currentMenu.includes('break')) this.props.action_viewBreakfast()
        //                             else if(currentMenu.includes('lunch') || currentMenu.includes('dinner')) this.props.action_viewLunchDinner()
        //                             else if(currentMenu.includes('dessert')) this.props.action_viewDessert()
        //                             else if(currentMenu.includes('drink') || currentMenu.includes('beverage')) this.props.action_viewDrinks()
        //                         }} >
        //                         {currentMenu}
        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>
        // )
    }
}
export default MenuButtons
