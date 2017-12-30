import React from 'react'
import MediaQuery from 'react-responsive'

const Price = (props) => {

    if(isNaN(props.price)) {
        return(
            null
        )
    }
    return (
        <div id="mobile_menu_item_right" className="item_lr">
            <MediaQuery maxWidth={767}>
                <div className="item_detail" id="mobile_item_price">
                    {parseFloat(Math.round((props.price) * 100) / 100).toFixed(2)}
                </div>
            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={991}>
                <div className="item_detail" id="item_price">
                    {parseFloat(Math.round((props.price) * 100) / 100).toFixed(2)}
                </div>
            </MediaQuery>

            <MediaQuery minWidth={992}>
                <div className="item_detail" id="item_price">
                    {parseFloat(Math.round((props.price) * 100) / 100).toFixed(2)}
                </div>
            </MediaQuery>
        </div>
    )
}
export default Price
