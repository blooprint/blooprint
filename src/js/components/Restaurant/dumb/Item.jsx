import React from 'react'
import MediaQuery from 'react-responsive'

const Item = (props) => {
    return (
        <div>
            <MediaQuery maxWidth={767}>
                <div className="item_detail" id="mobile_item_item">
                    {props.item}
                </div>
            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={991}>
                <div className="item_detail" id="item_item">
                    {props.item}
                </div>
            </MediaQuery>

            <MediaQuery minWidth={992}>
                <div className="item_detail" id="item_item">
                    {props.item}
                </div>
            </MediaQuery>
        </div>
    )
}
export default Item
