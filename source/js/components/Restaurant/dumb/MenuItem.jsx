import React from 'react'
import Item from './Item'
import Side from './Side'
import Price from './Price'
import MediaQuery from 'react-responsive'

const MenuItem = (props) => {

    // console.log('MenuItem props\n',props)
    return (
        <div>
            <MediaQuery maxWidth={767}>
                <li id="mobile_menu_item">
                    <div className="item_lr" id="mobile_menu_item_left">
                        <Item item={props.item.item} />
                        <Side side={props.item.side} />
                    </div>
                    <Price price={props.item.price} />
                </li>
            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={991}>
                <li id="mobile_menu_item">
                    <div className="item_lr" id="menu_item_left">
                        <Item item={props.item.item} />
                        <Side side={props.item.side} />
                    </div>
                    <Price price={props.item.price} />
                </li>
            </MediaQuery>

            <MediaQuery minWidth={992}>
                <li id="menu_item">
                    <div className="item_lr" id="menu_item_left">
                        <Item item={props.item.item} />
                        <Side side={props.item.side} />
                    </div>
                    <Price price={props.item.price} />
                </li>
            </MediaQuery>
        </div>
    )
}

export default MenuItem
