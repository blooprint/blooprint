import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

class MenuButtons extends Component {

    constructor(props) {
        super(props)
        this.menuIndexArray = []
    }

    isTopOrBottomButton = (value, index, array) => {
        if(this.props.topbottom == 'top') {
            if((!value[0][0].menu.toLowerCase().includes('drink')) && (!value[0][0].menu.toLowerCase().includes('dess')) && (!value[0][0].menu.toLowerCase().includes('bever')) && (!value[0][0].menu.toLowerCase().includes('sweet'))) {
                this.menuIndexArray.push(index)
                return true
            }
            return false
        }
        else if(this.props.topbottom == 'bottom') {
            if((value[0][0].menu.toLowerCase().includes('drink')) || (value[0][0].menu.toLowerCase().includes('dess')) || (value[0][0].menu.toLowerCase().includes('bever')) || (value[0][0].menu.toLowerCase().includes('sweet'))) {
                this.menuIndexArray.push(index)
                return true
            }
            return false
        }
    }

    setBrowsingWindowPosition() {
        this.props.setHasOpened()
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        this.menuIndexArray.map((menu, index) => {
            if(index%2 != 0) { // right button
                var rButton = document.getElementsByClassName("mobile_menu_button")[index]
                var rHeight = window.getComputedStyle(rButton,null).getPropertyValue("height")
                var lButton = document.getElementsByClassName("mobile_menu_button")[index-1]
                var lHeight = window.getComputedStyle(lButton,null).getPropertyValue("height")

                if(rHeight > lHeight) {
                    lButton.setAttribute("style", "height:" + rHeight)
                }
                else {
                    rButton.setAttribute("style", "height:" + lHeight)
                }
            }
        })
    }

    render() {
        const buttonsArray = this.props.restaurant.menus.filter(this.isTopOrBottomButton)
        return (
            <div id="mobile_menu_buttons">
                {
                    buttonsArray.map((menuObject, index) => {
                        const currentMenu = menuObject[0][0].menu

                        if((buttonsArray[index+1] == null) && (index%2 == 0)) {
                            return (
                                <div id="button_menu" className="button_menu_center" onClick={() => {
                                        this.props.setOpenedMenu(this.menuIndexArray[index])
                                        this.setBrowsingWindowPosition()
                                    }} >
                                    <p>{currentMenu}</p>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div id="button_menu" className="mobile_menu_button" onClick={() => {
                                        this.props.setOpenedMenu(this.menuIndexArray[index])
                                        this.setBrowsingWindowPosition()
                                    }} >
                                    <p>{currentMenu}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}
export default MenuButtons
