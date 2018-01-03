import React, { Component } from 'react'
import MenuSection from './MenuSection'
import MediaQuery from 'react-responsive'
import MenuItem from './MenuItem'

class ViewSoretedMenuList extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div id="current_section_list">
                <MediaQuery maxWidth={767}>
                    {
                        this.props.restaurant.menus[this.props.restaurant.openedMenuIndex].map((individualSectionArray, index) => {
                            const currentSection = individualSectionArray[0].section
                            return (
                                <div id="mobile_sortedMenuList">
                                    <MenuSection
                                        className="mobile_menu_block"
                                        sectionTitle={currentSection}
                                        sectionIndex={index}
                                        list={individualSectionArray}
                                        {...this.props} />
                                </div>
                            )
                        })
                    }
                </MediaQuery>

                <MediaQuery minWidth={768} maxWidth={991}>
                    {
                        this.props.restaurant.menus[this.props.restaurant.openedMenuIndex].map((individualSectionArray, index) => {
                            const currentSection = individualSectionArray[0].section
                            return (
                                <div id="mobile_sortedMenuList">
                                    <MenuSection
                                        className="menu_block"
                                        sectionTitle={currentSection}
                                        sectionIndex={index}
                                        list={individualSectionArray}
                                        {...this.props} />
                                </div>
                            )
                        })
                    }
                </MediaQuery>

                <MediaQuery minWidth={992}>
                    {
                        this.props.restaurant.menus[this.props.restaurant.openedMenuIndex].map((individualSectionArray, index) => {
                            const currentSection = individualSectionArray[0].section
                            return (
                                <div id="sortedMenuList">
                                    <MenuSection
                                        className="menu_block"
                                        sectionTitle={currentSection}
                                        sectionIndex={index}
                                        list={individualSectionArray}
                                        {...this.props} />
                                </div>
                            )
                        })
                    }
                </MediaQuery>
            </div>
        )
    }
}

export default ViewSoretedMenuList
