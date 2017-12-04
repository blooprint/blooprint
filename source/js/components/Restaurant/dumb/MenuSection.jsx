import React from 'react'
import MediaQuery from 'react-responsive'

import MenuItem from './MenuItem'

const MenuSection = (props) => {

    return (
        <div>
            <MediaQuery maxWidth={767}>
                <ul id="mobile_menu_section">
                    {props.list.map((item) => {
                        return (
                            <MenuItem item={item} key={item.id} />
                        )
                    })}
                </ul>
            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={991}>
                <ul id="menu_section">
                    {props.list.map((item) => {
                        return (
                            <MenuItem item={item} key={item.id} />
                        )
                    })}
                </ul>
            </MediaQuery>

            <MediaQuery minWidth={992}>
                <ul id="menu_section">
                    {props.list.map((item) => {
                        return (
                            <MenuItem item={item} key={item.id} />
                        )
                    })}
                </ul>
            </MediaQuery>
        </div>
    )
}

export default MenuSection
