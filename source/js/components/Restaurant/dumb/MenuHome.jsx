import React, { Component } from 'react'
import ViewSoretedMenuList from './ViewSoretedMenuList'
// import ViewLunchDinner from './ViewLunchDinner'
// import ViewDessert from './ViewDessert'
import MenuHeader from './MenuHeader'
import MenuSection from './MenuSection'
import Footer from '../../Blooprint/dumb/Footer'

class MenuHome extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <MenuHeader className="menu_block" {...this.props} />
                <ViewSoretedMenuList {...this.props} />
                <Footer />
            </div>
        )
    }
}

export default MenuHome
