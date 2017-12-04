import React from 'react'
import MenuSection from './MenuSection'
import MediaQuery from 'react-responsive'

const ViewSoretedMenuList = (props) => {

    if(props.restaurant.viewDessert) {
        return (
            <div id="sortedMenuList">
                <MenuSection
                    className="menu_block"
                    list={props.restaurant.dessert} />
            </div>
        )
    }
    else if(props.restaurant.viewBreakfast) {
        return (
            <div>
                <MediaQuery maxWidth={767}>
                    <div id="mobile_sortedMenuList">
                        <MenuSection
                            className="menu_block"
                            list={props.restaurant.breakfastSpecials} />
                        <MenuSection
                            className="menu_block"
                            list={props.restaurant.breakfastItems} />
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={768} maxWidth={991}>
                    <div id="sortedMenuList">
                        <MenuSection
                            className="menu_block"
                            list={props.restaurant.breakfastSpecials} />
                        <MenuSection
                            className="menu_block"
                            list={props.restaurant.breakfastItems} />
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                    <div id="sortedMenuList">
                        <MenuSection
                            className="menu_block"
                            list={props.restaurant.breakfastSpecials} />
                        <MenuSection
                            className="menu_block"
                            list={props.restaurant.breakfastItems} />
                    </div>
                </MediaQuery>
            </div>
        )
    }
    else if(props.restaurant.viewLunchDinner) {
        return (
            <div id="sortedMenuList">
                <MenuSection
                    className="menu_block"
                    list={props.restaurant.dinnerSpecials} />
                <MenuSection
                    className="menu_block"
                    list={props.restaurant.lunchSpecials} />
                <MenuSection
                    className="menu_block"
                    list={props.restaurant.dinnerItems} />
                <MenuSection
                    className="menu_block"
                    list={props.restaurant.lunchItems} />
            </div>
        )
    }
}

export default ViewSoretedMenuList
