import React from 'react'
import MediaQuery from 'react-responsive'

const Side = (props) => {
    return (
        <div>
            <MediaQuery maxWidth={767}>
                <div className="item_detail" id="mobile_item_side">
                    {props.side}
                </div>
            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={991}>
                <div className="item_detail" id="item_side">
                    {props.side}
                </div>
            </MediaQuery>

            <MediaQuery minWidth={992}>
                <div className="item_detail" id="item_side">
                    {props.side}
                </div>
            </MediaQuery>
        </div>
    )
}
export default Side
