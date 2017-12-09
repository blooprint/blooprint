import React from 'react'
import MediaQuery from 'react-responsive'

import MenuItem from './MenuItem'

class MenuSection extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <h2 className="section_header" onClick={() => this.props.setOpenedSectionIndex(this.props.sectionIndex)}>{this.props.sectionTitle}</h2>
                <div>
                    { (this.props.restaurant.openedSectionIndex == this.props.sectionIndex) && (!this.props.restaurant.freshLoaded) ? <ul id="mobile_menu_section">
                        {this.props.list.map((item) => {
                            return (
                                <MenuItem item={item} key={item.id} />
                            )
                        })}
                    </ul> : null }
                </div>
            </div>
        )

        // return (
        //     <div>
        //         <MediaQuery maxWidth={767}>
        //             <ul id="mobile_menu_section">
        //                 {this.props.list.map((item) => {
        //                     return (
        //                         <MenuItem item={item} key={item.id} />
        //                     )
        //                 })}
        //             </ul>
        //         </MediaQuery>
        //
        //         <MediaQuery minWidth={768} maxWidth={991}>
        //             <ul id="menu_section">
        //                 {this.props.list.map((item) => {
        //                     return (
        //                         <MenuItem item={item} key={item.id} />
        //                     )
        //                 })}
        //             </ul>
        //         </MediaQuery>
        //
        //         <MediaQuery minWidth={992}>
        //             <ul id="menu_section">
        //                 {this.props.list.map((item) => {
        //                     return (
        //                         <MenuItem item={item} key={item.id} />
        //                     )
        //                 })}
        //             </ul>
        //         </MediaQuery>
        //     </div>
        // )
    }
}

export default MenuSection
