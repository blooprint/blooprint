import React from 'react'
import MediaQuery from 'react-responsive'

const Price = (props) => {
    return (
        <div id="button_breakfast" className="mobile_menu_button" onClick={() => {props.action_viewBreakfast()}}><p>break</p></div>
    )
}
export default Price
