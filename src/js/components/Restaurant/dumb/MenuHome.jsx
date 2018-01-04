import React, { Component } from 'react'
import ViewSoretedMenuList from './ViewSoretedMenuList'
import MenuHeader from './MenuHeader'
import MenuSection from './MenuSection'
import Footer from '../../Blooprint/dumb/Footer'
import MenuButtons from './MenuButtons'

class MenuHome extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <MenuHeader className="menu_block" {...this.props} />
                <MenuButtons topbottom={'top'} {...this.props} />
                { this.props.restaurant.hasOpened ? <ViewSoretedMenuList {...this.props} /> : null }
                <MenuButtons topbottom={'bottom'} {...this.props} />
                <Footer />
            </div>
        )
    }
}

export default MenuHome
