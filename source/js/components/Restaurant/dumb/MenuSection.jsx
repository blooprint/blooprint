import React from 'react'
import MediaQuery from 'react-responsive'

import MenuItem from './MenuItem'

class MenuSection extends React.Component {

    constructor(props) {
        super(props)
    }

    setBrowsingWindowPosition() {
        window.scrollTo(0, 0)
        var clickedItem = document.querySelectorAll('.section_header')[this.props.sectionIndex]
        var domRect = clickedItem.getBoundingClientRect()
        console.log('yPos\n',domRect.y)
        window.scrollTo(0, domRect.y)
    }

    render() {

        return (
            <div>
                <MediaQuery maxWidth={767}>
                    <h2 className="mobile_section_header" onClick={() => {
                            this.props.setOpenedSectionIndex(this.props.sectionIndex)
                            this.setBrowsingWindowPosition()
                        }}>{this.props.sectionTitle}</h2>
                    <div id="menu_item_list">
                        { (this.props.restaurant.openedSectionIndex == this.props.sectionIndex) && (!this.props.restaurant.freshLoaded) ? <ul id="mobile_menu_section">
                            {this.props.list.map((item) => {
                                return (
                                    <MenuItem item={item} key={item.id} />
                                )
                            })}
                        </ul> : null }
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={768} maxWidth={991}>
                    <h2 className="section_header" onClick={() => {
                            this.props.setOpenedSectionIndex(this.props.sectionIndex)
                            this.setBrowsingWindowPosition()
                        }}>{this.props.sectionTitle}</h2>
                    <div id="menu_item_list">
                        { (this.props.restaurant.openedSectionIndex == this.props.sectionIndex) && (!this.props.restaurant.freshLoaded) ? <ul id="mobile_menu_section">
                            {this.props.list.map((item) => {
                                return (
                                    <MenuItem item={item} key={item.id} />
                                )
                            })}
                        </ul> : null }
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                    <h2 className="section_header" onClick={() => {
                            this.props.setOpenedSectionIndex(this.props.sectionIndex)
                            this.setBrowsingWindowPosition()
                        }}>{this.props.sectionTitle}</h2>
                    <div id="menu_item_list">
                        { (this.props.restaurant.openedSectionIndex == this.props.sectionIndex) && (!this.props.restaurant.freshLoaded) ? <ul id="mobile_menu_section">
                            {this.props.list.map((item) => {
                                return (
                                    <MenuItem item={item} key={item.id} />
                                )
                            })}
                        </ul> : null }
                    </div>
                </MediaQuery>
            </div>
        )
    }
}

export default MenuSection
