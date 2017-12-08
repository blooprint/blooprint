import React, { Component } from 'react'
import MenuSection from './MenuSection'
import MediaQuery from 'react-responsive'

class ViewSoretedMenuList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.restaurant.viewDessert) {
            return (
                <div>
                    <MediaQuery maxWidth={767}>
                        <div id="mobile_sortedMenuList">
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.dessert} />
                        </div>
                    </MediaQuery>

                    <MediaQuery minWidth={768} maxWidth={991}>
                        <div id="sortedMenuList">
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.dessert} />
                        </div>
                    </MediaQuery>

                    <MediaQuery minWidth={992}>
                        <div id="sortedMenuList">
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.dessert} />
                        </div>
                    </MediaQuery>
                </div>
            )
        }
        else if(this.props.restaurant.viewBreakfast) {
            return (
                <div>
                    <MediaQuery maxWidth={767}>
                        <div id="mobile_sortedMenuList">
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.breakfastSpecials} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.breakfastItems} />
                        </div>
                    </MediaQuery>

                    <MediaQuery minWidth={768} maxWidth={991}>
                        <div id="sortedMenuList">
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.breakfastSpecials} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.breakfastItems} />
                        </div>
                    </MediaQuery>

                    <MediaQuery minWidth={992}>
                        <div id="sortedMenuList">
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.breakfastSpecials} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.breakfastItems} />
                        </div>
                    </MediaQuery>
                </div>
            )
        }
        else if(this.props.restaurant.viewLunchDinner) {
            return (
                <div>
                    <MediaQuery maxWidth={767}>
                        <div id="mobile_sortedMenuList">
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.dinnerSpecials} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.lunchSpecials} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.dinnerItems} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.lunchItems} />
                        </div>
                    </MediaQuery>

                    <MediaQuery minWidth={768} maxWidth={991}>
                        <div id="sortedMenuList">
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.dinnerSpecials} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.lunchSpecials} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.dinnerItems} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.lunchItems} />
                        </div>
                    </MediaQuery>

                    <MediaQuery minWidth={992}>
                        <div id="sortedMenuList">
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.dinnerSpecials} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.lunchSpecials} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.dinnerItems} />
                            <MenuSection
                                className="menu_block"
                                list={this.props.restaurant.lunchItems} />
                        </div>
                    </MediaQuery>
                </div>
            )
        }
    }
}

export default ViewSoretedMenuList
