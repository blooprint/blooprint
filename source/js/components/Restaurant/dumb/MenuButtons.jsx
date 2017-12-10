import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import MenuButton from './MenuButton'

class MenuButtons extends Component {

    constructor(props) {
        super(props)
        this.menuIndexArray = []
    }

    ifLowerButton = (value, index, array) => {
        if(this.props.topbottom == 'top') {
            if((value[0][0].menu.includes('break')) || (value[0][0].menu.includes('lun')) || (value[0][0].menu.includes('din'))) {
                this.menuIndexArray.push(index)
                return true
            }
            return false
        }
        else if(this.props.topbottom == 'bottom') {
            if((value[0][0].menu.includes('drink')) || (value[0][0].menu.includes('dess')) || (value[0][0].menu.includes('bev')) || (value[0][0].menu.includes('sweet'))) {
                this.menuIndexArray.push(index)
                return true
            }
            return false
        }
    }

    render() {
        const buttonsArray = this.props.restaurant.menus.filter(this.ifLowerButton)
        return (
            <div id="mobile_menu_buttons">
                {
                    buttonsArray.map((menuObject, index) => {
                        const currentMenu = menuObject[0][0].menu
                        return (
                            <div id="button_breakfast" className="mobile_menu_button" onClick={() => this.props.setOpenedMenu(this.menuIndexArray[index])} >
                                <p>{currentMenu}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default MenuButtons
